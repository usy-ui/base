"use client";
import { FC } from "react";

import clsx from "clsx";

import {
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps,
  BaseSemanticTagUnion,
  CommonCompProps,
} from "../../../@types";
import { CommonBoxFlexProps } from "../Box";

type PureFlexProps = {
  tag?: BaseSemanticTagUnion;
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  alignContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
};

export type FlexProps = CommonBoxFlexProps &
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
}) => {
  return (
    <Tag
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
};
