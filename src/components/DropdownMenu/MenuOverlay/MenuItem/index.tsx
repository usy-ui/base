import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../../@types";

export type MenuItem = {
  children: ReactNode;
  onClick?: () => void;
};

type MenuItemProps = MenuItem & CommonCompProps;

export const MenuItem: FC<MenuItemProps> = ({
  className,
  name = "dropdown-menu-item",
  testId = name,
  ...item
}) => {
  return (
    <li
      onClick={item.onClick}
      aria-hidden="true"
      className={clsx("usy-dropdown-menu-item", className)}
      data-testid={testId}
    >
      {item.children}
    </li>
  );
};
