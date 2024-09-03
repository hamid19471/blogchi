import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  full: "btn-full",
  square: "btn-square",
  wide: "btn-wide",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  isOutline = false,
  isLink = false,
  isLoading = false,
  isDisabled = false,
  shape = "default",
  loadingText = "درحال ارسال درخواست...",
  size = "normal",
  loadingType = "spinner",
  type = "button",
  animatedIcon = false,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "pointer-events-none opacity-70": isDisabled },
    { "btn-animation": animatedIcon },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );
  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading ? loadingText : children}
    </button>
  );
};
