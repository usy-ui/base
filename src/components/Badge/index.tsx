"use client";
import { CSSProperties, forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import {
  BaseColorUnion,
  BaseRadiusUnion,
  BaseSizeUnion,
  BaseVariantUnion,
  CommonCompProps,
} from "../../@types";

type BadgeProps = {
  variant?: BaseVariantUnion;
  size?: BaseSizeUnion;
  color?: BaseColorUnion | "random";
  radius?: BaseRadiusUnion;
  children: ReactNode;
} & CommonCompProps;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    variant = "outline",
    size = "medium",
    color = "primary",
    radius = "small",
    children,
    className,
    name = "badge",
    testId = name,
  },
  ref
) {
  const colorInHex = useUsyColor(color);
  const cssVariables = {
    "--usy-badge-color": colorInHex,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={clsx(
        "usy-badge-container",
        {
          [`variant-${variant}`]: Boolean(variant),
          [`size-${size}`]: Boolean(size),
          [`radius-${radius}`]: Boolean(radius),
        },
        className
      )}
      style={{ ...cssVariables }}
      data-testid={testId}
    >
      {children}
    </div>
  );
});
