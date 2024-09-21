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

import { HeightProps, type CommonCompProps } from "../../../@types";
import { FieldLabel } from "../FieldLabel";
import { PureInputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";

type PickedInputProps = Pick<
  PureInputProps,
  | "name"
  | "value"
  | "label"
  | "placeholder"
  | "description"
  | "hasAsterisk"
  | "hasError"
  | "disabled"
  | "widthProps"
> &
  HeightProps;

type MoreTextAreaProps = {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>, value: string) => void;
};

type TextAreaProps = PickedInputProps & MoreTextAreaProps & CommonCompProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      name,
      value = "",
      label,
      placeholder,
      description,
      hasAsterisk = false,
      hasError = false,
      disabled = false,
      widthProps,
      heightProps,
      onChange,
      onBlur,
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
      onChange?.(e, e.target.value);
    };

    const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) {
        return;
      }

      setInputValue(e.target.value);
      onBlur?.(e, e.target.value);
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
            ...(widthProps || { width: "100%" }),
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
        {renderTextArea()}
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
