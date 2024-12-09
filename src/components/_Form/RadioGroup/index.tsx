"use client";
import { ChangeEvent, forwardRef, useEffect, useState } from "react";

import clsx from "clsx";

import {
  CommonCompProps,
  FieldLabelProps,
  FormFieldProps,
} from "../../../@types";
import { FieldLabel } from "../FieldLabel";

export type RadioType = {
  id: string;
  label: string;
  value: string;
};

type PureRadioGroupProps = {
  items: RadioType[];
  direction?: "vertical" | "horizontal";
};

export type RadioGroupProps = PureRadioGroupProps &
  Pick<FieldLabelProps, "label"> &
  Pick<
    FormFieldProps<RadioType, HTMLInputElement>,
    "value" | "disabled" | "onChange"
  > &
  CommonCompProps;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
    {
      items,
      direction = "horizontal",
      label,
      disabled,
      value,
      onChange,
      className,
      name = "radio-group",
      testId = name,
    },
    ref
  ) {
    const [selectedItem, setSelectedItem] = useState<RadioType>(
      value || items[0]
    );

    useEffect(() => {
      if (value) {
        setSelectedItem(value);
      }
    }, [value]);

    const handleChange = (
      item: RadioType,
      e: ChangeEvent<HTMLInputElement>
    ) => {
      if (disabled) {
        return;
      }

      setSelectedItem(item);
      onChange?.(item, e);
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "usy-radio-group-container",
          {
            disabled: Boolean(disabled),
          },
          className
        )}
        data-testid={testId}
      >
        {label && (
          <FieldLabel name={name} label={label} testId={`${testId}-title`} />
        )}
        <div
          className={clsx("radio-group-container", {
            [`direction-${direction}`]: Boolean(direction),
          })}
        >
          {items.map((item) => {
            const itemId = `${name}-${item.id}`;

            return (
              <label key={itemId} htmlFor={itemId} className="radio-item">
                <input
                  type="radio"
                  id={itemId}
                  name={name}
                  checked={item.value === selectedItem.value}
                  onChange={(e) => handleChange(item, e)}
                  className="input"
                />
                <span className="label">{item.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
);
