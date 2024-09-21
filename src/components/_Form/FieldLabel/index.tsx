"use client";
import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps, FieldLabelProps } from "../../../@types";

export const FieldLabel: FC<FieldLabelProps & CommonCompProps> = ({
  name = "field-label",
  hasAsterisk,
  label,
  className,
  testId = name,
}) => {
  return (
    label && (
      <label
        className={clsx("usy-field-label-container", className)}
        htmlFor={name}
        data-testid={testId}
      >
        {label}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};
