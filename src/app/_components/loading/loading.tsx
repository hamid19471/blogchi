import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

const LoadingSize: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  variant,
  size = "normal",
  loadingType = "spinner",
  className,
}) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${variant}`]: variant },
    { [`${LoadingSize[size]}`]: size },
    { [`loading-${loadingType}`]: loadingType },
  );
  return <span className={classes}></span>;
};
