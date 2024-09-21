"use client";
import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";
import { MarginProps, PaddingProps, WidthProps } from "../../../@types";

type BarSkeletonProps = {
  rows?: number;
} & WidthProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const BarSkeleton: FC<BarSkeletonProps> = ({
  name = "skeleton",
  rows = 1,
  widthProps,
  marginProps,
  paddingProps,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx("usy-bar-skeleton-container", className)}
      style={{
        ...widthProps,
        ...marginProps,
        ...paddingProps,
      }}
      data-testid={testId}
    >
      {Array(rows)
        .fill("skeleton")
        .map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={clsx("usy-base-skeleton", "bar-skeleton")}
            data-testid={`${testId}-bar-${index}`}
          />
        ))}
    </div>
  );
};
