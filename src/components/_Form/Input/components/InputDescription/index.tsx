import { FC } from "react";

import { InputProps } from "../..";

export const InputDescription: FC<
  Pick<InputProps, "description" | "testId">
> = ({ description, testId }) => {
  return (
    description && (
      <small
        className="usy-input-description"
        data-testid={`${testId}-description`}
      >
        {description}
      </small>
    )
  );
};
