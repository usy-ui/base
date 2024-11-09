import { Children, cloneElement, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { usyZIndex } from "@src/styles";

import { CommonCompProps, WidthProps } from "../../../@types";

type PureMenuOverlayProps = {
  children: ReactElement | ReactElement[];
  position?: "top" | "bottom";
  zIndex?: number;
};

type MenuOverlayProps = PureMenuOverlayProps & WidthProps & CommonCompProps;

export const MenuOverlay = forwardRef<HTMLDivElement, MenuOverlayProps>(
  function MenuOverlay(
    {
      children,
      position = "bottom",
      zIndex = usyZIndex.latest,
      widthProps,
      className,
      name = "dropdown-menu-overlay",
      testId = name,
    },
    ref
  ) {
    return (
      <div
        className={clsx(
          "usy-dropdown-menu-overlay",
          `position-${position}`,
          className
        )}
        style={{ ...widthProps, zIndex }}
        data-testid={testId}
        ref={ref}
      >
        <ul>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {
              key: `menu-item-${index}`,
            });
          })}
        </ul>
      </div>
    );
  }
);

MenuOverlay.displayName = "MenuOverlay";
