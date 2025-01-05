"use client";
import { ChangeEvent, FocusEvent, forwardRef, useState } from "react";

import clsx from "clsx";

import { EyeSlashIcon, EyeIcon } from "@src/components/Icon";
import { useNameMemo, useSyncOuterValue } from "@src/hooks";

import { CommonCompProps } from "../../../@types";
import { FieldLabel } from "../FieldLabel";
import { InputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";
import { InputIconLeft } from "../Input/components/InputIconLeft";
import { InputIconRight } from "../Input/components/InputIconRight";

type PickedInputProps = Pick<
  InputProps,
  | "size"
  | "iconLeft"
  | "placeholder"
  | "description"
  | "label"
  | "hasAsterisk"
  | "value"
  | "disabled"
  | "hasError"
  | "onChange"
  | "onBlur"
  | "widthProps"
>;

export type PasswordProps = PickedInputProps & CommonCompProps;

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  function Password(
    {
      size = "medium",
      iconLeft,
      placeholder,
      description,
      label,
      hasAsterisk = false,
      value = "",
      hasError = false,
      disabled = false,
      onChange,
      onBlur,
      widthProps,
      className,
      name = "password",
      testId = name,
    },
    ref
  ) {
    const [hidePassword, setHidePassword] = useState(true);
    const [innerValue, setInnerValue] = useState(value);
    const { nameMemo } = useNameMemo(name, "password");
    useSyncOuterValue<string>(setInnerValue, value);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setInnerValue(e.target.value);
      onChange?.(e.target.value, e);
    };

    const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setInnerValue(e.target.value);
      onBlur?.(e.target.value, e);
    };

    /**
     * Render
     */

    const renderInput = () => {
      return (
        <input
          ref={ref}
          id={nameMemo}
          name={nameMemo}
          type={hidePassword ? "password" : "text"}
          value={innerValue}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className="input"
          data-testid={`${testId}-input`}
        />
      );
    };

    const renderHideShowPassword = () => {
      return (
        <InputIconRight
          size={size}
          iconRight={
            hidePassword ? (
              <EyeIcon
                onClick={() => setHidePassword(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <EyeSlashIcon
                onClick={() => setHidePassword(true)}
                style={{ cursor: "pointer" }}
              />
            )
          }
          testId={testId}
        />
      );
    };

    return (
      <div
        className={clsx(
          "usy-input-container",
          {
            disabled: Boolean(disabled),
          },
          className
        )}
      >
        {label && (
          <FieldLabel
            name={nameMemo}
            hasAsterisk={hasAsterisk}
            label={label}
            testId={`${testId}-title`}
          />
        )}
        <div
          className={clsx("input-container", `size-${size}`, {
            "has-error": hasError,
          })}
          style={{ ...(widthProps || { width: "100%" }) }}
          data-testid={testId}
        >
          <InputIconLeft size={size} iconLeft={iconLeft} testId={testId} />
          {renderInput()}
          {renderHideShowPassword()}
        </div>
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
