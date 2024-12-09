"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BasePositionUnion, CommonCompProps } from "../../@types";

export type TooltipProps = {
  children: ReactNode;
  content: string | ReactNode;
  position?: BasePositionUnion;
} & CommonCompProps;

export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  className,
  name = "tooltip",
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-tooltip-container",
        `position-${position}`,
        className
      )}
      data-testid={testId}
    >
      <div className="tooltip-overlay" data-testid={`${testId}-content`}>
        {content}
      </div>
      {children}
    </div>
  );
};
