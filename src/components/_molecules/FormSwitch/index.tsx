/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";
import { ChangeEvent, FC, useState } from "react";

import clsx from "clsx";

import { useSyncOuterValue } from "@src/hooks";

import {
  BaseSizeUnion,
  CommonCompProps,
  FormFieldProps,
} from "../../../@types";
import { FieldLabel, PureFieldLabelProps } from "../../_atoms/FieldLabel";

/**
 * Types
 */

type PureSwitchProps = {
  size?: BaseSizeUnion;
};

export type SwitchProps = PureSwitchProps &
  PureFieldLabelProps &
  Omit<FormFieldProps<boolean, HTMLInputElement>, "hasError"> &
  CommonCompProps;

export const Switch: FC<SwitchProps> = ({
  size = "large",
  label,
  hasAsterisk,
  value,
  disabled,
  onChange,
  className,
  name = "switch",
  testId = name,
}) => {
  const [checked, setChecked] = useState(value);
  useSyncOuterValue<boolean | undefined>(setChecked, Boolean(checked));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    setChecked(!checked);
    onChange?.(!checked, e);
  };

  return (
    <div
      className={clsx(
        "usy-switch-container",
        {
          disabled: Boolean(disabled),
        },
        className
      )}
      data-testid={testId}
    >
      {label && (
        <FieldLabel
          name={name}
          hasAsterisk={hasAsterisk}
          label={label}
          testId={`${testId}-title`}
        />
      )}
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={handleChange}
        className="input"
      />
      <label
        htmlFor={name}
        aria-hidden="true"
        className={clsx("switch", `size-${size}`)}
      />
    </div>
  );
};
