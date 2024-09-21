"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import {
  WidthProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  CommonCompProps,
  BaseSemanticTag,
} from "../../../@types";

export type CommonBoxFlexProps = {
  tag?: BaseSemanticTag;
  children: ReactNode;
  id?: string;
};

export type PureBoxProps = {
  display?: "block" | "inline-block";
};

type BoxProps = CommonBoxFlexProps &
  PureBoxProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Box: FC<BoxProps> = ({
  tag: Tag = "div",
  display,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  className,
  id,
  name = "box",
  testId = name,
}) => {
  return (
    <Tag
      style={{
        display,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
      id={id}
      className={clsx("usy-box-container", className)}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
