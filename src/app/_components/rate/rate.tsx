import { StarIcon } from "lucide-react";
import { RateProps } from "./rate.types";
import { Size } from "../types/size.type";

const sizeCalsses: Record<Size, number> = {
  tiny: 14,
  small: 18,
  normal: 24,
  large: 32,
};

export const Rate: React.FC<RateProps> = ({
  variant = "warning",
  rate,
  className,
  size = "normal",
}) => {
  const RateNumber = [1, 2, 3, 4, 5];
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {RateNumber.map((item) => (
        <StarIcon
          key={`rate-${item}`}
          size={sizeCalsses[size]}
          fill={item <= rate ? "var(--color-" + variant + ")" : "none"}
          color={item <= rate ? "var(--color-" + variant + ")" : "currentColor"}
        />
      ))}
    </div>
  );
};
