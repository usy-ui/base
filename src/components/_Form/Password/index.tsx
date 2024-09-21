"use client";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import { EyeSlashIcon, EyeIcon } from "@src/components/Icon";
import { useNameMemo } from "@src/hooks";

import { CommonCompProps } from "../../../@types";
import { FieldLabel } from "../FieldLabel";
import { PureInputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";
import { InputIconLeft } from "../Input/components/InputIconLeft";
import { InputIconRight } from "../Input/components/InputIconRight";

type PickedInputProps = Pick<
  PureInputProps,
  | "name"
  | "value"
  | "size"
  | "label"
  | "iconLeft"
  | "placeholder"
  | "description"
  | "hasAsterisk"
  | "hasError"
  | "disabled"
  | "onChange"
  | "onBlur"
  | "widthProps"
>;

type PasswordProps = PickedInputProps & CommonCompProps;

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  function Password(
    {
      name = "password",
      value = "",
      size = "medium",
      label,
      iconLeft,
      placeholder,
      description,
      hasAsterisk = false,
      hasError = false,
      disabled = false,
      widthProps,
      onChange,
      onBlur,
      className,
      testId = name,
    },
    ref
  ) {
    const [hidePassword, setHidePassword] = useState(true);
    const [inputValue, setInputValue] = useState(value);
    const { nameMemo } = useNameMemo(name, "password");

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setInputValue(e.target.value);
      onChange?.(e.target.value, e);
    };

    const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setInputValue(e.target.value);
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
          value={inputValue}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className="input"
          data-testid={`${testId}-input`}
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
          className={clsx("input-container", {
            [`size-${size}`]: Boolean(size),
            "has-error": hasError,
          })}
          style={{ ...(widthProps || { width: "100%" }) }}
          data-testid={testId}
        >
          <InputIconLeft iconLeft={iconLeft} testId={testId} />
          {renderInput()}
          <InputIconRight
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
        </div>
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
