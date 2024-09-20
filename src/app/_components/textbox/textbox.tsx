import classNames from "classnames";
import { TextboxProps } from "./textbox.types";
import { Size } from "../types/size.type";
import { forwardRef } from "react";

const Sizeclasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

// eslint-disable-next-line react/display-name
export const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  (
    { className, variant = "ghost", size = "normal", type = "text", ...rest },
    ref
  ) => {
    const classes = classNames("textbox", "w-full", className, {
      [`textbox-${variant}`]: variant,
      [`${Sizeclasses[size]}`]: size,
    });

    return <input type={type} className={classes} ref={ref} {...rest} />;
  }
);
