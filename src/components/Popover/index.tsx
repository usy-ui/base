"use client";
import { FC, ReactNode, useCallback, useState } from "react";

import clsx from "clsx";

import { useOutsideClick } from "@src/hooks";

import { BasePosition, BasePositionExtra, CommonCompProps } from "../../@types";
import { Typography } from "../Typography";

type PopoverProps = {
  content: string | ReactNode;
  position?: BasePosition | BasePositionExtra;
  children: ReactNode;
} & CommonCompProps;

export const Popover: FC<PopoverProps> = ({
  content,
  position = "bottom",
  children,
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
          {typeof content === "string" ? (
            <Typography wrap="nowrap">{content}</Typography>
          ) : (
            content
          )}
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
