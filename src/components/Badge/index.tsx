"use client";
import { CSSProperties, forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import {
  BaseColor,
  BaseRadius,
  BaseSize,
  BaseVariant,
  CommonCompProps,
} from "../../@types";

type BadgeProps = {
  variant?: BaseVariant;
  size?: BaseSize;
  color?: BaseColor | "random";
  radius?: BaseRadius;
  children: ReactNode;
} & CommonCompProps;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    name = "badge",
    variant = "outline",
    size = "medium",
    color = "primary",
    radius = "small",
    children,
    className,
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
