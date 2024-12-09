"use client";
import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
  BaseSemanticTagUnion,
  CommonCompProps,
} from "../../../@types";
import { Typography } from "../../Typography";

type PurePanelProps = {
  tag?: BaseSemanticTagUnion;
  title?: ReactNode;
  children: ReactNode;
};

export type PanelProps = PurePanelProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  {
    title,
    widthProps,
    heightProps,
    paddingProps,
    marginProps,
    children,
    className,
    name = "panel",
    testId = name,
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("usy-panel-container", className)}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || {
          padding: `${usySpacing.px20} ${usySpacing.px24} ${usySpacing.px24}`,
        }),
        ...marginProps,
      }}
      data-testid={testId}
    >
      {title}
      {typeof children === "string" ? (
        <Typography size="medium">{children}</Typography>
      ) : (
        children
      )}
    </div>
  );
});
