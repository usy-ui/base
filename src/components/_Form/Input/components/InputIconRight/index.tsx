import { FC } from "react";

import clsx from "clsx";

import { InputProps } from "../..";

export const InputIconRight: FC<
  Pick<InputProps, "size" | "iconRight" | "testId">
> = ({ size, iconRight, testId }) => {
  return (
    iconRight && (
      <span
        className={clsx("usy-input-icon-right", `input-size-${size}`)}
        data-testid={`${testId}-icon-right`}
      >
        {iconRight}
      </span>
    )
  );
};
