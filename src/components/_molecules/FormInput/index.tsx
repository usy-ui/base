"use client";
import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useState,
} from "react";

import clsx from "clsx";

import { useNameMemo, useSyncOuterValue } from "@src/hooks";

import {
  BaseSizeUnion,
  CommonCompProps,
  FormFieldProps,
  WidthProps,
} from "../../../@types";
import { FieldLabel, PureFieldLabelProps } from "../../_atoms/FieldLabel";

import { InputDescription } from "./components/InputDescription";
import { InputIconLeft } from "./components/InputIconLeft";
import { InputIconRight } from "./components/InputIconRight";

/**
 * Types
 */

export type PureInputProps = {
  type?: "text" | "number" | "date" | "datetime";
  size?: BaseSizeUnion;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  transformOnChange?: (value: string) => string;
  transformOnBlur?: (value: string) => string;
};

export type InputProps = PureInputProps &
  PureFieldLabelProps &
  FormFieldProps<string, HTMLInputElement> &
  WidthProps &
  CommonCompProps;

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
  const [innerValue, setInnerValue] = useState(value);
  const { nameMemo } = useNameMemo(name, "input");
  useSyncOuterValue<string>(setInnerValue, value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const formattedValue = transformOnChange(e.target.value);
    setInnerValue(formattedValue);
    onChange?.(formattedValue, e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const formattedValue = transformOnBlur(e.target.value);
    setInnerValue(formattedValue);
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
        value={innerValue}
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
      style={{ ...(widthProps || { width: "100%" }) }}
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
