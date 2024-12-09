"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";
import { usyColor } from "@src/styles";

import {
  CommonCompProps,
  BaseColorUnion,
  BaseSizeExtraUnion,
  BaseRadiusUnion,
  BaseSizeUnion,
} from "../../@types";

export type AvatarProps = {
  src: string;
  size?: BaseSizeUnion | BaseSizeExtraUnion;
  color?: BaseColorUnion | "random";
  radius?: BaseRadiusUnion;
  fallback?: ReactNode;
  imgAlt?: string;
  onClick?: () => void;
} & CommonCompProps;

export const Avatar: FC<AvatarProps> = ({
  src,
  size = "medium",
  color = "black",
  radius = "small",
  fallback = "A",
  imgAlt = "avatar",
  onClick,
  name = "avatar",
  className,
  testId = name,
}) => {
  const bgColor = useUsyColor(color);

  return (
    <div
      aria-hidden="true"
      title={imgAlt}
      onClick={onClick}
      className={clsx(
        "usy-avatar-container",
        {
          [`size-${size}`]: Boolean(size),
          [`radius-${radius}`]: Boolean(radius),
        },
        className
      )}
      style={{
        color: usyColor.white,
        backgroundColor: src ? undefined : bgColor,
        cursor: onClick ? "pointer" : undefined,
      }}
      data-testid={testId}
    >
      {src ? <img src={src} alt={imgAlt} className="image" /> : fallback}
    </div>
  );
};
