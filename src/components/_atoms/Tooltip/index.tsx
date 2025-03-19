"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BasePositionUnion, CommonCompProps } from "../../../@types";

/**
 * Types
 */

type PureTooltipProps = {
  children: ReactNode;
  content: string | ReactNode;
  position?: BasePositionUnion;
};

export type TooltipProps = PureTooltipProps & CommonCompProps;

/**
 * Component
 */

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
