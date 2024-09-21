"use client";
import { FC } from "react";

import clsx from "clsx";

import {
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps,
  BaseSemanticTag,
  CommonCompProps,
} from "../../../@types";
import { CommonBoxFlexProps } from "../Box";

type PureFlexProps = {
  tag?: BaseSemanticTag;
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  grow?: number;
  shrink?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  id?: string;
};

type FlexProps = CommonBoxFlexProps &
  PureFlexProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Flex: FC<FlexProps> = ({
  tag: Tag = "div",
  display = "flex",
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  grow,
  shrink,
  wrap,
  gap,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  id,
  className,
  name = "flex",
  testId = name,
}) => {
  return (
    <Tag
      style={{
        display,
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        justifyContent,
        alignItems,
        flexWrap: wrap,
        gap,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
      id={id}
      className={clsx("usy-flex-container", className)}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
