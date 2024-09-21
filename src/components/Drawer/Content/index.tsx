import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";

type DrawerContentProps = {
  children: ReactNode;
} & CommonCompProps;

export const DrawerContent: FC<DrawerContentProps> = ({
  name = "drawer-content",
  children,
  className,
  testId = name,
}) => {
  return (
    <section
      className={clsx("usy-drawer-content-container", className)}
      data-testid={testId}
    >
      {children}
    </section>
  );
};
