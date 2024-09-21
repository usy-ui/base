"use client";
import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps, MarginProps } from "../../../@types";

type CircleSkeletonProps = {
  width: string;
  height: string;
} & MarginProps &
  CommonCompProps;

export const CircleSkeleton: FC<CircleSkeletonProps> = ({
  name = "circle-skeleton",
  width,
  height,
  marginProps,
  className,
  testId = name,
}) => {
  return (
    <div className={clsx("usy-circle-skeleton-container", className)}>
      <div
        className={clsx("circle-skeleton", "usy-base-skeleton")}
        style={{
          minWidth: width,
          maxWidth: width,
          minHeight: height,
          maxHeight: height,
          ...marginProps,
        }}
        data-testid={testId}
      />
    </div>
  );
};
