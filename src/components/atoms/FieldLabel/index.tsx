"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";

/**
 * Types
 */

export type PureFieldLabelProps = {
  label?: string | ReactNode;
  hasAsterisk?: boolean;
};

type FieldLabelProps = PureFieldLabelProps & CommonCompProps;

/**
 * Component
 * Usage: Common label for form field components
 */

export const FieldLabel: FC<FieldLabelProps> = ({
  name = "field-label",
  hasAsterisk,
  label,
  className,
  testId = name,
}) => {
  return (
    label && (
      <label
        htmlFor={name}
        className={clsx("usy-field-label-container", className)}
        data-testid={testId}
      >
        {label}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};
