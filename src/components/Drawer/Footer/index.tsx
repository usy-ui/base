import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";
import { Button, ButtonProps } from "../../../components/Button";

export type DrawerFooterProps = {
  buttons: ButtonProps[];
  alignContent?: "left" | "center" | "right";
} & CommonCompProps;

export const DrawerFooter: FC<DrawerFooterProps> = ({
  buttons,
  alignContent = "center",
  className,
  name = "drawer-footer",
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-drawer-footer-container",
        `align-content-${alignContent}`,
        className
      )}
      data-testid={testId}
    >
      {(buttons || []).map((buttonProps, index) => (
        <Button key={`${buttonProps.name}-${index}`} {...buttonProps} />
      ))}
    </div>
  );
};
