import classNames from "classnames";
import { AlertProps } from "./alert.types";
import { Info } from "lucide-react";

export const Alert: React.FC<AlertProps> = ({
  className,
  variant,
  children,
  showIcon = false,
}) => {
  const classes = classNames("alert", className, {
    [`alert-${variant}`]: variant,
  });
  return (
    <div className={classes}>
      {showIcon && <Info size={18} color={`var(--color-${variant})`} />}
      {children}
    </div>
  );
};
