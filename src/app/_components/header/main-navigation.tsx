"use client";
import { MainMenu } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-center gap-8 [&>li]:cursor-pointer mr-12">
      {MainMenu.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li
            key={`nav-${item.href}`}
            className={`hover:text-primary hover:scale-110 transition-all duration-200 ease-in-out ${
              isActive && "text-primary scale-110 border-b border-primary"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
