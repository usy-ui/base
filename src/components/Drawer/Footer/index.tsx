import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";
import { Button, ButtonProps } from "../../../components/Button";

type DrawerFooterProps = {
  alignContent?: "left" | "center" | "right";
  buttons: ButtonProps[];
} & CommonCompProps;

export const DrawerFooter: FC<DrawerFooterProps> = ({
  name = "drawer-footer",
  alignContent = "center",
  buttons,
  className,
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
