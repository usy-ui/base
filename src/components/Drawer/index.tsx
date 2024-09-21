"use client";
import { forwardRef, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted } from "@src/hooks";
import { usyZIndex } from "@src/styles";

import { CommonCompProps, WidthProps } from "../../@types";

import { disableScroll } from "./Drawer.utils";

export { DrawerHeader } from "./Header";
export { DrawerContent } from "./Content";
export { DrawerFooter } from "./Footer";

type DrawerProps = {
  side?: "left" | "right";
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  zIndex?: number;
} & WidthProps &
  CommonCompProps;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  {
    name = "drawer",
    side = "right",
    widthProps,
    header,
    children,
    footer,
    containerElement,
    zIndex = usyZIndex.medium,
    className,
    testId = name,
  },
  ref
) {
  const { isMounted } = useMounted();

  useEffect(() => {
    disableScroll(true);

    return () => {
      disableScroll(false);
    };
  }, []);

  const renderDrawer = () => {
    return (
      <div
        className={clsx("usy-drawer-overlay", `pos-${side}`)}
        style={{ zIndex }}
        data-testid={`${testId}-overlay`}
      >
        <div
          ref={ref}
          className={clsx("usy-drawer-container", className)}
          style={{ ...(widthProps || { maxWidth: "480px" }) }}
          data-testid={testId}
        >
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
});
