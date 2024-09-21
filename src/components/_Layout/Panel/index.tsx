"use client";
import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
  BaseSemanticTag,
  CommonCompProps,
} from "../../../@types";
import { Typography } from "../../Typography";

type PurePanelProps = {
  tag?: BaseSemanticTag;
  title?: ReactNode;
  borderRadius?: string;
  children: string | ReactNode;
};
type PanelProps = PurePanelProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  {
    name = "panel",
    title,
    borderRadius = usySpacing.px14,
    widthProps,
    heightProps,
    paddingProps,
    marginProps,
    children,
    className,
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
        borderRadius,
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
