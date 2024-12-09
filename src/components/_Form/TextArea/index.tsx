"use client";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks";
import { usyElement } from "@src/styles";

import {
  FormFieldProps,
  HeightProps,
  type CommonCompProps,
} from "../../../@types";
import { FieldLabel } from "../FieldLabel";
import { InputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";

type PickedInputProps = Pick<
  InputProps,
  | "size"
  | "placeholder"
  | "description"
  | "label"
  | "hasAsterisk"
  | "value"
  | "disabled"
  | "hasError"
  | "widthProps"
> &
  HeightProps;

export type TextAreaProps = PickedInputProps &
  Pick<FormFieldProps<string, HTMLTextAreaElement>, "onChange" | "onBlur"> &
  CommonCompProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      size = "medium",
      placeholder,
      description,
      label,
      hasAsterisk = false,
      value = "",
      disabled = false,
      hasError = false,
      onChange,
      onBlur,
      widthProps,
      heightProps,
      name = "textarea",
      className,
      testId,
    },
    ref
  ) {
    const [inputValue, setInputValue] = useState(value);
    const { nameMemo } = useNameMemo(name, "textarea");

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) {
        return;
      }

      setInputValue(e.target.value);
      onChange?.(e.target.value, e);
    };

    const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) {
        return;
      }

      setInputValue(e.target.value);
      onBlur?.(e.target.value, e);
    };

    /**
     * Render
     */

    const renderTextArea = () => {
      return (
        <textarea
          ref={ref}
          id={nameMemo}
          name={nameMemo}
          value={inputValue}
          data-testid={testId}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={clsx("textarea", {
            "has-error": hasError,
          })}
          style={{
            height: heightProps?.height,
            minHeight: heightProps?.minHeight || usyElement.heightMedium,
            maxHeight: heightProps?.maxHeight || "200px",
          }}
        />
      );
    };

    return (
      <div
        className={clsx(
          "usy-textarea-container",
          `size-${size}`,
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
        {renderTextArea()}
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
