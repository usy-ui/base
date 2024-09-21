"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";

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

type RadioGroupProps = PureRadioGroupProps &
  FieldLabelProps &
  Omit<FormFieldProps<RadioType, HTMLInputElement>, "hasError"> &
  CommonCompProps;

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  value,
  items,
  direction = "horizontal",
  disabled,
  onChange,
  className,
  name = "radio-group",
  testId = name,
}) => {
  const [selectedItem, setSelectedItem] = useState<RadioType>(
    value || items[0]
  );

  useEffect(() => {
    if (value) {
      setSelectedItem(value);
    }
  }, [value]);

  const handleChange = (item: RadioType, e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    setSelectedItem(item);
    onChange?.(item, e);
  };

  return (
    <div
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
};
