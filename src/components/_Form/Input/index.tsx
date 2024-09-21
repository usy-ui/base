"use client";
import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks";

import {
  BaseSize,
  CommonCompProps,
  FieldLabelProps,
  WidthProps,
} from "../../../@types";
import { FieldLabel } from "../FieldLabel";

import { InputDescription } from "./components/InputDescription";
import { InputIconLeft } from "./components/InputIconLeft";
import { InputIconRight } from "./components/InputIconRight";

export type PureInputProps = {
  value?: string;
  type?: "text" | "number";
  size?: BaseSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  hasError?: boolean;
  disabled?: boolean;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, e: FocusEvent<HTMLInputElement>) => void;
  formatOnChange?: (value: string) => string;
  formatOnBlur?: (value: string) => string;
} & FieldLabelProps &
  WidthProps;

export type InputProps = PureInputProps & CommonCompProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name = "input",
    value = "",
    size = "medium",
    label,
    type = "text",
    iconLeft,
    iconRight,
    placeholder,
    description,
    hasAsterisk = false,
    hasError = false,
    disabled = false,
    widthProps,
    onChange,
    onBlur,
    formatOnChange = (value) => value,
    formatOnBlur = (value) => value,
    className,
    testId = name,
  },
  ref
) {
  const [inputValue, setInputValue] = useState(value);
  const { nameMemo } = useNameMemo(name, "input");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const formattedValue = formatOnChange(e.target.value);
    setInputValue(formattedValue);
    onChange?.(formattedValue, e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const formattedValue = formatOnBlur(e.target.value);
    setInputValue(formattedValue);
    onBlur?.(formattedValue, e);
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
        value={inputValue}
        type={type}
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
        <InputIconRight iconRight={iconRight} testId={testId} />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
});
