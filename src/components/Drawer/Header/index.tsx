import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CloseIcon } from "@src/components/Icon";
import { Typography } from "@src/components/Typography";

import { CommonCompProps } from "../../../@types";

type DrawerHeaderProps = {
  title: string | ReactNode;
  onClose?: () => void;
} & CommonCompProps;

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  name = "drawer-header",
  title,
  onClose,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx("usy-drawer-header-container", className)}
      data-testid={testId}
    >
      {typeof title === "string" ? (
        <Typography size="large" weight="semibold" testId={`${testId}-title`}>
          {title}
        </Typography>
      ) : (
        title
      )}
      {onClose ? (
        <CloseIcon
          onClick={onClose}
          className="close-icon"
          data-testid={`${testId}-close`}
        />
      ) : (
        <span />
      )}
    </div>
  );
};
