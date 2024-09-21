import { FC } from "react";

import { InputProps } from "../..";

export const InputIconRight: FC<Pick<InputProps, "iconRight" | "testId">> = ({
  iconRight,
  testId,
}) => {
  return (
    iconRight && (
      <span
        className="usy-input-icon-right"
        data-testid={`${testId}-icon-right`}
      >
        {iconRight}
      </span>
    )
  );
};
