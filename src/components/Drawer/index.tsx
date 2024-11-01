"use client";
import { FC, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted, useOutsideClick } from "@src/hooks";
import { usyZIndex } from "@src/styles";

import { CommonCompProps, WidthProps } from "../../@types";
import { CloseIcon } from "../Icon";

import { disableScroll } from "./Drawer.utils";

export { DrawerHeader, DrawerHeaderProps } from "./Header";
export { DrawerContent, DrawerContentProps } from "./Content";
export { DrawerFooter, DrawerFooterProps } from "./Footer";

type PureDrawerProps = {
  side?: "left" | "right";
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  preventOutsideClose?: boolean;
  containerElement?: HTMLElement;
  onClose?: () => void;
  zIndex?: number;
};

export type DrawerProps = PureDrawerProps & WidthProps & CommonCompProps;

export const Drawer: FC<DrawerProps> = ({
  name = "drawer",
  side = "right",
  widthProps,
  header,
  children,
  footer,
  preventOutsideClose,
  containerElement,
  onClose,
  zIndex = usyZIndex.medium,
  className,
  testId = name,
}) => {
  const { isMounted } = useMounted();
  const handleOutsideClick = () => {
    onClose?.();
  };

  const { elementRef } = useOutsideClick(
    handleOutsideClick,
    preventOutsideClose
  );

  useEffect(() => {
    disableScroll(true);

    return () => {
      disableScroll(false);
    };
  }, []);

  /**
   * Render
   */

  const renderCloseIcon = () => {
    if (typeof onClose !== "function" || header) {
      return null;
    }

    return (
      <CloseIcon
        className="header-close"
        onClick={onClose}
        data-testid={`${testId}-header-close`}
      />
    );
  };

  const renderDrawer = () => {
    return (
      <div
        className={clsx("usy-drawer-overlay", `pos-${side}`)}
        style={{ zIndex }}
        data-testid={`${testId}-overlay`}
      >
        <div
          ref={elementRef}
          className={clsx("usy-drawer-container", className)}
          style={{ ...(widthProps || { maxWidth: "480px" }) }}
          data-testid={testId}
        >
          {renderCloseIcon()}
          {header}
          {children}
          {footer}
        </div>
      </div>
    );
  };

  return isMounted
    ? createPortal(renderDrawer(), containerElement || document.body)
    : null;
};
