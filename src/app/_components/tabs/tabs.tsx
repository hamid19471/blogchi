"use client";
import { useState } from "react";
import { TabProps } from "./tabs.types";

export const Tabs: React.FC<TabProps> = ({ tab }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs">
      <div className="tab-titles">
        {tab.map((item, index) => (
          <a
            key={`tab-${index}`}
            onClick={() => handleActiveTab(index)}
            className={`tab-title ${index === activeTab ? "tab-active" : ""}`}
          >
            {item.title}
          </a>
        ))}
      </div>
      {tab.map((item, index) => (
        <div
          className="tab-content"
          key={`tab-content-${index}`}
          style={{ display: activeTab === index ? "block" : "none" }}
        >
          {typeof item.content === "string" ? (
            <div
              dangerouslySetInnerHTML={{ __html: item.content as TrustedHTML }}
            />
          ) : (
            item.content
          )}
        </div>
      ))}
    </div>
  );
};
