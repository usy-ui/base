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
  BaseSizeUnion,
  CommonCompProps,
  FieldLabelProps,
  FormFieldProps,
  WidthProps,
} from "../../../@types";
import { FieldLabel } from "../FieldLabel";

import { InputDescription } from "./components/InputDescription";
import { InputIconLeft } from "./components/InputIconLeft";
import { InputIconRight } from "./components/InputIconRight";

export type PureInputProps = {
  type?: "text" | "number";
  size?: BaseSizeUnion;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  transformOnChange?: (value: string) => string;
  transformOnBlur?: (value: string) => string;
} & FieldLabelProps &
  FormFieldProps<string, HTMLInputElement> &
  WidthProps;

export type InputProps = PureInputProps & CommonCompProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = "text",
    size = "medium",
    iconLeft,
    iconRight,
    placeholder,
    description,
    transformOnChange = (value) => value,
    transformOnBlur = (value) => value,
    label,
    hasAsterisk = false,
    value = "",
    hasError = false,
    disabled = false,
    onChange,
    onBlur,
    widthProps,
    className,
    name = "input",
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

    const formattedValue = transformOnChange(e.target.value);
    setInputValue(formattedValue);
    onChange?.(formattedValue, e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const formattedValue = transformOnBlur(e.target.value);
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
        className={clsx("input-container", `size-${size}`, {
          "has-error": hasError,
        })}
        style={{ ...(widthProps || { width: "100%" }) }}
        data-testid={testId}
      >
        <InputIconLeft size={size} iconLeft={iconLeft} testId={testId} />
        {renderInput()}
        <InputIconRight size={size} iconRight={iconRight} testId={testId} />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
});
