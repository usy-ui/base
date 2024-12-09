import { FC, ReactNode } from "react";

import clsx from "clsx";

import { Scrollable } from "@src/components/_Layout/Scrollable";
import { usySpacing } from "@src/styles";

import { CommonCompProps } from "../../../@types";

export type DrawerContentProps = {
  children: ReactNode;
} & CommonCompProps;

export const DrawerContent: FC<DrawerContentProps> = ({
  name = "drawer-content",
  children,
  className,
  testId = name,
}) => {
  return (
    <Scrollable
      tag="section"
      className={clsx("usy-drawer-content-container", className)}
      paddingProps={{ paddingRight: usySpacing.px18 }}
      data-testid={testId}
    >
      {children}
    </Scrollable>
  );
};
