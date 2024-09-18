import classNames from "classnames";
import { TextboxProps } from "./textbox.types";
import { Size } from "../types/size.type";

const Sizeclasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

export const Textbox: React.FC<TextboxProps> = ({
  className,
  variant = "ghost",
  size = "normal",
  type = "text",
  ...rest
}) => {
  const classes = classNames("textbox", "w-full", className, {
    [`textbox-${variant}`]: variant,
    [`${Sizeclasses[size]}`]: size,
  });
  return <input type={type} className={classes} {...rest} />;
};
