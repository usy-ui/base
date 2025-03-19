import { FC } from "react";

import clsx from "clsx";

import { InputProps } from "../..";

export const InputIconLeft: FC<
  Pick<InputProps, "size" | "iconLeft" | "testId">
> = ({ size, iconLeft, testId }) => {
  return (
    iconLeft && (
      <span
        className={clsx("usy-input-icon-left", `input-size-${size}`)}
        data-testid={`${testId}-icon-left`}
      >
        {iconLeft}
      </span>
    )
  );
};
