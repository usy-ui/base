import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "@src/@types";

type FieldDescriptionProps = {
  description?: ReactNode;
} & CommonCompProps;

export const FieldDescription: FC<FieldDescriptionProps> = ({
  description,
  className,
  name = "field-description",
  testId = name,
}) => {
  return (
    description && (
      <small
        className={clsx("usy-field-description", className)}
        data-testid={testId}
      >
        {description}
      </small>
    )
  );
};
