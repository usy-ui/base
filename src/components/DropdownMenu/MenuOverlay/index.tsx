import { Children, cloneElement, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { usyZIndex } from "@src/styles";

import { CommonCompProps } from "../../../@types";

type PureMenuOverlayProps = {
  zIndex?: number;
  position?: "top" | "bottom";
  children: ReactElement | ReactElement[];
};

type MenuOverlayProps = PureMenuOverlayProps & CommonCompProps;

export const MenuOverlay = forwardRef<HTMLDivElement, MenuOverlayProps>(
  function MenuOverlay(
    {
      position = "bottom",
      children,
      zIndex = usyZIndex.latest,
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
        style={{ zIndex }}
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
