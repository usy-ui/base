"use client";
import { ChangeEvent, forwardRef, useState } from "react";

import clsx from "clsx";

import { PureFieldLabelProps } from "@src/components/_atoms/FieldLabel";
import { useSyncOuterValue } from "@src/hooks";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { Typography } from "../../_atoms/Typography";

/**
 * Types
 */

type PureCheckboxProps = {
  checked?: boolean;
};

export type CheckboxProps = PureCheckboxProps &
  Pick<PureFieldLabelProps, "label"> &
  Pick<FormFieldProps<boolean, HTMLInputElement>, "disabled" | "onChange"> &
  CommonCompProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      checked,
      label,
      disabled = false,
      onChange,
      className,
      name = "checkbox",
      testId = name,
    },
    ref
  ) {
    const [innerChecked, setInnerChecked] = useState(Boolean(checked));
    useSyncOuterValue<boolean>(setInnerChecked, Boolean(checked));

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setInnerChecked(!innerChecked);
      onChange?.(!innerChecked, e);
    };

    return (
      <label
        data-testid={testId}
        className={clsx(
          "usy-checkbox-container",
          {
            disabled: Boolean(disabled),
          },
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={innerChecked}
          onChange={handleCheck}
          className={clsx("input", {
            checked: Boolean(innerChecked),
          })}
          data-testid={`${testId}-input`}
        />
        {typeof label === "string" ? (
          <Typography size="medium">{label}</Typography>
        ) : (
          label
        )}
      </label>
    );
  }
);
