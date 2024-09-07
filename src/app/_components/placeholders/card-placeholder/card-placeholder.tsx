import { ImageIcon } from "lucide-react";
import { CardPlaceholderProps } from "./card-placeholder.types";

export const CardPlaceholder: React.FC<CardPlaceholderProps> = ({
  count = 1,
  className,
}) => {
  const counts = Array.from({ length: count }, (_, index) => index + 1);
  return (
    <>
      {counts.map((count) => (
        <div className="card" key={`card-placeholder-${count}`}>
          <figure>
            <div className="relative h-[220px] w-[100%] overflow-hidden opacity-60">
              <div className="absolute flex items-center justify-center inset-0 bg-base-100 opacity-35 m-2 rounded-md animate-pulse">
                <ImageIcon size={44} />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <div className="cart-title">
              <div className="w-[100px] h-[10px] bg-base-300 rounded-full animate-pulse mb-4" />
            </div>
            <div className="card-body-section">
              <div className="w-[100px] h-[10px] bg-base-300 rounded-full animate-pulse" />
              <div className="w-[100px] h-[10px] bg-base-300 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="card-footer">
            <div className="flex items-center justify-between w-full gap-x-2">
              <div className="w-[100px] h-[10px] bg-base-300 rounded-full animate-pulse" />
              <div className="w-[100px] h-[10px] bg-base-300 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
