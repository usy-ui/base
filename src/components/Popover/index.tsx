"use client";
import { FC, ReactNode, useCallback, useState } from "react";

import clsx from "clsx";

import { useOutsideClick } from "@src/hooks";

import {
  BasePositionUnion,
  BasePositionExtraUnion,
  CommonCompProps,
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
};

export type PopoverProps = PurePopoverProps & CommonCompProps;

export const Popover: FC<PopoverProps> = ({
  children,
  content,
  position = "bottom",
  className,
  name = "popover",
  testId = name,
}) => {
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
