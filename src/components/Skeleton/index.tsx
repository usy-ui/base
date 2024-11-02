import { FC } from "react";

import clsx from "clsx";

import {
  CommonCompProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps,
} from "../../@types";

type PureSkeletonProps = {
  type: "circle" | "bars";
  numOfBars?: number;
};

export type SkeletonProps = PureSkeletonProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Skeleton: FC<SkeletonProps> = ({
  type,
  numOfBars = 1,
  widthProps,
  heightProps,
  marginProps,
  paddingProps,
  className,
  name = `${type}-skeleton`,
  testId = name,
}) => {
  if (type === "circle") {
    return (
      <div
        className={clsx("usy-circle-skeleton-container", className)}
        style={{ ...marginProps, ...paddingProps }}
        data-testid={testId}
      >
        <div
          className={clsx("circle-skeleton", "usy-base-skeleton")}
          style={{
            ...widthProps,
            ...heightProps,
          }}
        />
      </div>
    );
  }

  if (type === "bars") {
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
        {Array(numOfBars)
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
  }

  return "";
};
