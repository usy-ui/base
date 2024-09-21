"use client";
import { forwardRef, ReactNode, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, MarginProps, WidthProps } from "../../@types";
import { AngleDownIcon } from "../Icon";
import { Typography } from "../Typography";

export type TogglePanelProps = {
  title: ReactNode;
  expand?: boolean;
  children: ReactNode;
  onToggle?: (isExpand: boolean) => void;
} & WidthProps &
  MarginProps &
  CommonCompProps;

export const TogglePanel = forwardRef<HTMLDivElement, TogglePanelProps>(
  function TogglePanel(
    {
      title,
      expand: isDefExpand = false,
      children,
      widthProps,
      marginProps,
      onToggle,
      className,
      name = "toggle-panel",
      testId = name,
    },
    ref
  ) {
    const [isExpand, setIsExpand] = useState(isDefExpand);

    const handleToggle = () => {
      setIsExpand(!isExpand);
      onToggle?.(!isExpand);
    };

    /**
     * Render
     */

    const renderHeader = () => {
      return (
        <div
          role="button"
          aria-hidden="true"
          className="usy-toggle-panel-header"
          onClick={handleToggle}
          data-testid={`${testId}-header`}
        >
          <Typography
            tag="label"
            size="medium"
            weight="semibold"
            data-testid={`${testId}-header-title`}
          >
            {title}
          </Typography>
          <AngleDownIcon
            className={clsx("arrow-icon", {
              expanded: isExpand,
            })}
            data-testid={`${testId}-header-toggle-icon`}
          />
        </div>
      );
    };

    const renderContent = () => {
      return (
        <div
          className={clsx("usy-toggle-panel-content")}
          data-testid={`${testId}-content`}
        >
          {children}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "usy-toggle-panel-container",
          {
            expanded: isExpand,
          },
          className
        )}
        style={{ ...(widthProps || { width: "100%" }), ...marginProps }}
        data-testid={testId}
      >
        {renderHeader()}
        {renderContent()}
      </div>
    );
  }
);
