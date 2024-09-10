import classNames from "classnames";
import { Size } from "../types/size.type";
import { AvatarProps } from "./avatar.types";
import Image from "next/image";
import { UserIcon } from "lucide-react";

const sizeCalsses: Record<Size, number> = {
  tiny: 32,
  small: 40,
  normal: 48,
  large: 56,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  size = "normal",
  className,
  src,
  alt = "",
}) => {
  const classes = classNames("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeCalsses[size]}`]: size,
  });
  return (
    <div
      className={classes}
      style={{ width: sizeCalsses[size], height: sizeCalsses[size] }}
    >
      {src ? (
        <Image
          src={src}
          width={sizeCalsses[size]}
          height={sizeCalsses[size]}
          alt={alt}
        />
      ) : (
        <UserIcon
          width={sizeCalsses[size] / 2}
          height={sizeCalsses[size] / 2}
        />
      )}
    </div>
  );
};
