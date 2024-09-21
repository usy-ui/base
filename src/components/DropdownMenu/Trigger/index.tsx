import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";

type PureTriggerProps = {
  hasBorder?: boolean;
  children: ReactNode;
};

type TriggerProps = PureTriggerProps & CommonCompProps;

export const Trigger: FC<TriggerProps> = ({
  name = "dropdown-menu-trigger",
  children,
  hasBorder,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-dropdown-trigger-container",
        {
          "has-border": hasBorder,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
