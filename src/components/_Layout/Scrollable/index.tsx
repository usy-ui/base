"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
  BaseSemanticTag,
  CommonCompProps,
} from "../../../@types";

type PureScrollableProps = {
  tag?: BaseSemanticTag;
  scrollType?: "vertical" | "horizontal" | "both";
  showScrollOnHover?: boolean;
  children?: ReactNode;
};

type ScrollableProps = PureScrollableProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Scrollable: FC<ScrollableProps> = ({
  tag: Tag = "div",
  scrollType = "vertical",
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  className,
  name = "scrollable",
  testId = name,
}) => {
  return (
    <Tag
      className={clsx(
        "usy-scrollable-container",
        `scroll-${scrollType}`,
        className
      )}
      style={{
        ...(widthProps || { width: "100%" }),
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
