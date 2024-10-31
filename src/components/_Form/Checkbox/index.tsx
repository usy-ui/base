"use client";
import { ChangeEvent, forwardRef, ReactNode, useEffect, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { Typography } from "../../Typography";

type PureCheckboxProps = {
  label?: string | ReactNode;
  checked?: boolean;
};

export type CheckboxProps = PureCheckboxProps &
  Pick<FormFieldProps<boolean, HTMLInputElement>, "disabled" | "onChange"> &
  CommonCompProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      checked = false,
      disabled = false,
      onChange,
      className,
      name = "checkbox",
      testId = name,
    },
    ref
  ) {
    const [innerChecked, setInnerChecked] = useState(Boolean(checked));

    useEffect(() => {
      setInnerChecked(checked);
    }, [checked]);

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
