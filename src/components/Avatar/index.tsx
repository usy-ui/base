"use client";
import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";
import { usyColor } from "@src/styles";

import {
  CommonCompProps,
  BaseColor,
  BaseSizeExtra,
  BaseRadius,
  BaseSize,
} from "../../@types";

type AvatarProps = {
  url: string;
  size?: BaseSize | BaseSizeExtra;
  color?: BaseColor | "random";
  radius?: BaseRadius;
  fallback?: ReactNode;
  imgAlt?: string;
  onClick?: () => void;
} & CommonCompProps;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    url,
    size = "medium",
    color = "black",
    radius = "small",
    fallback = "A",
    imgAlt = "avatar",
    onClick,
    name = "avatar",
    className,
    testId = name,
  },
  ref
) {
  const bgColor = useUsyColor(color);

  return (
    <div
      ref={ref}
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
        backgroundColor: bgColor,
        cursor: onClick ? "pointer" : undefined,
      }}
      data-testid={testId}
    >
      {url ? <img src={url} alt={imgAlt} className="image" /> : fallback}
    </div>
  );
});
