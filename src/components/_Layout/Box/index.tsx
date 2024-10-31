"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import {
  WidthProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  CommonCompProps,
  BaseSemanticTagUnion,
} from "../../../@types";

export type CommonBoxFlexProps = {
  children: ReactNode;
  tag?: BaseSemanticTagUnion;
  id?: string;
};

export type PureBoxProps = {
  display?: "block" | "inline-block";
};

export type BoxProps = PureBoxProps &
  CommonBoxFlexProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Box: FC<BoxProps> = ({
  tag: Tag = "div",
  display = "block",
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
