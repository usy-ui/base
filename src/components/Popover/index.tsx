"use client";
import { CSSProperties, FC, ReactNode, useCallback, useState } from "react";

import clsx from "clsx";

import { useOutsideClick, useUsyColor } from "@src/hooks";

import {
  BasePositionUnion,
  BasePositionExtraUnion,
  CommonCompProps,
  BaseColorUnion,
} from "../../@types";
import { Typography } from "../Typography";

export type PopoverContentFnParams = {
  openPopover: () => void;
  closePopover: () => void;
};

export type PopoverContentFnType = (props: PopoverContentFnParams) => ReactNode;

type PurePopoverProps = {
  children: ReactNode;
  content: string | ReactNode | PopoverContentFnType;
  position?: BasePositionUnion | BasePositionExtraUnion;
  color?: BaseColorUnion;
};

export type PopoverProps = PurePopoverProps & CommonCompProps;

export const Popover: FC<PopoverProps> = ({
  children,
  content,
  position = "bottom",
  color = "white",
  className,
  name = "popover",
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);
  const cssVariables = {
    "--usy-popover-bg-color": colorInHex,
  } as CSSProperties;

  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const { triggerRef, elementRef } = useOutsideClick(handleOutsideClick);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Render
   */

  const renderContent = () => {
    if (typeof content === "function") {
      return content({
        openPopover: () => setIsOpen(true),
        closePopover: () => setIsOpen(false),
      });
    }

    if (typeof content === "string") {
      return <Typography wrap="nowrap">{content}</Typography>;
    }

    return content;
  };

  return (
    <div className={clsx("usy-popover-container", className)}>
      {isOpen && (
        <div
          ref={elementRef}
          className={clsx("popover-overlay", {
            [`position-${position}`]: Boolean(position),
          })}
          style={{ ...cssVariables }}
          data-testid={`${testId}-content`}
        >
          {renderContent()}
        </div>
      )}
      <div
        ref={triggerRef}
        role="button"
        className="popover-trigger"
        aria-hidden="true"
        onClick={toggle}
      >
        {children}
      </div>
    </div>
  );
};
