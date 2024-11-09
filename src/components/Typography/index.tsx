"use client";
import { FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import {
  BaseColorUnion,
  BaseSizeExtraUnion,
  BaseSizeGigantUnion,
  BaseSizeUnion,
  BaseTypoTagUnion,
  BaseTypoWeightUnion,
  CommonCompProps,
} from "../../@types";

export type TypographySize =
  | BaseSizeUnion
  | BaseSizeExtraUnion
  | BaseSizeGigantUnion;
export type TypographyAlign = "left" | "center" | "right" | "justify";

type PureTypographyProps = {
  children: ReactNode;
  tag?: BaseTypoTagUnion;
  weight?: BaseTypoWeightUnion;
  color?: BaseColorUnion | "random";
  size?: TypographySize;
  align?: TypographyAlign;
  wrap?: "wrap" | "nowrap";
};

export type TypographyProps = PureTypographyProps & CommonCompProps;

export const Typography: FC<TypographyProps> = ({
  children,
  tag: Tag = "p",
  weight = "medium",
  color = "dark-9",
  size = "medium",
  align = "left",
  wrap = "wrap",
  className,
  name = "typography",
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);
  const innerSize = useMemo(
    () => (!size && ["p", "span", "label"].includes(Tag) ? "medium" : size),
    [size, Tag]
  );

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [`size-${innerSize}`]: Boolean(innerSize),
          [`weight-${weight}`]: Boolean(weight),
        },
        className
      )}
      style={{ color: colorInHex, textAlign: align, textWrap: wrap }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
