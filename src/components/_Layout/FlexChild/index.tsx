"use client";
import { FC } from "react";

import {
  CommonCompProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps,
} from "../../../@types";
import { CommonBoxFlexProps } from "../Box";

type PureFlexChild = {
  basic?: string;
  grow?: number;
  shrink?: number;
  order?: number;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
};

export type FlexChildProps = PureFlexChild &
  CommonBoxFlexProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const FlexChild: FC<FlexChildProps> = ({
  tag: Tag = "div",
  grow,
  order,
  shrink,
  basic,
  alignSelf,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  id,
  className,
  name = "flex-child",
  testId = name,
}) => {
  return (
    <Tag
      id={id}
      className={className}
      style={{
        flexBasis: basic,
        flexGrow: grow,
        flexShrink: shrink,
        order,
        alignSelf,
        ...widthProps,
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
