"use client";
import { forwardRef } from "react";

import clsx from "clsx";

import {
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps,
  BaseSemanticTagUnion,
  CommonCompProps,
} from "../../../@types";
import { CommonBoxFlexProps } from "../LayoutBox";

/**
 * Types
 */

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

type FlexJustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexAlignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "baseline"
  | "stretch";

type FlexAlignContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

type PureFlexProps = {
  tag?: BaseSemanticTagUnion;
  display?: "flex" | "inline-flex";
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: FlexAlignItems;
  alignContent?: FlexAlignContent;
  wrap?: FlexWrap;
  gap?: string;
};

/**
 * Component
 */

export type FlexProps = CommonBoxFlexProps &
  PureFlexProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  {
    tag: Tag = "div",
    display = "flex",
    direction,
    justifyContent,
    alignItems,
    alignContent,
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
  },
  ref
) {
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{
        display,
        flexDirection: direction,
        justifyContent,
        alignItems,
        alignContent,
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
});
