import { FC } from "react";

import { InputProps } from "../..";

export const InputIconLeft: FC<Pick<InputProps, "iconLeft" | "testId">> = ({
  iconLeft,
  testId,
}) => {
  return (
    iconLeft && (
      <span className="usy-input-icon-left" data-testid={`${testId}-icon-left`}>
        {iconLeft}
      </span>
    )
  );
};
