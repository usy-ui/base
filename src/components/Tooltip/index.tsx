"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BasePosition, CommonCompProps } from "../../@types";

type TooltipProps = {
  content: string;
  position?: BasePosition;
  children: ReactNode;
} & CommonCompProps;

export const Tooltip: FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  className,
  name = "tooltip",
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-tooltip-container",
        {
          [`position-${position}`]: Boolean(position),
        },
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
