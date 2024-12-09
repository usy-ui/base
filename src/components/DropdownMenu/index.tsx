"use client";
import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from "react";

import { clsx } from "clsx";

import { useOutsideClick } from "@src/hooks";

import { CommonCompProps } from "../../@types";

import { MenuOverlay } from "./MenuOverlay";
import { MenuItem, MenuItemProps } from "./MenuOverlay/MenuItem";
import { MenuSeparator } from "./MenuOverlay/MenuSeparator";
import { Trigger, TriggerProps } from "./Trigger";

type PureDropdownMenuProps = {
  children: ReactElement[];
  open?: boolean;
};

export type DropdownMenuProps = PureDropdownMenuProps & CommonCompProps;

const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  open: initOpen = false,
  className,
  name = "dropdown-menu",
  testId = name,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen || false);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const { elementRef, triggerRef } = useOutsideClick(handleOutsideClick);
  const toggleMenu = () => setIsOpen(!isOpen);

  /**
   * Render
   */

  const renderChildren = () => {
    const enhancedChildren: ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (child.type === Trigger) {
        enhancedChildren.push(
          <div
            key="trigger"
            onClick={toggleMenu}
            ref={triggerRef}
            aria-hidden="true"
          >
            {child}
          </div>
        );
      }

      if (child.type === MenuOverlay && isOpen) {
        enhancedChildren.push(
          cloneElement(child, {
            key: "menu-overlay",
            ref: elementRef,
          })
        );
      }
    });

    return enhancedChildren;
  };

  return (
    <div
      className={clsx("usy-dropdown-menu-container", className)}
      data-testid={testId}
    >
      {renderChildren()}
    </div>
  );
};

export {
  DropdownMenu,
  Trigger as DropdownMenuTrigger,
  TriggerProps as DropdownTriggerProps,
  MenuOverlay as DropdownMenuOverlay,
  MenuSeparator as DropdownMenuSeparator,
  MenuItem as DropdownMenuItem,
  MenuItemProps as DropdownMenuItemProps,
};
