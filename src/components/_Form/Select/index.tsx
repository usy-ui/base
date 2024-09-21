/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { forwardRef, ReactNode, useCallback, useState } from "react";

import clsx from "clsx";

import { useOutsideClick } from "@src/hooks";

import {
  CommonCompProps,
  FieldLabelProps,
  FormFieldProps,
  WidthProps,
} from "../../../@types";
import { ChevronSortIcon } from "../../Icon";
import { FieldLabel } from "../FieldLabel";

export type SelectItemType<T = any> = {
  id: string | number;
  label: string;
  labelElement?: ReactNode;
  value: T;
};

type PureSelectProps = {
  items: SelectItemType[];
  isOpen?: boolean;
};

type SelectProps = PureSelectProps &
  FieldLabelProps &
  Omit<FormFieldProps<SelectItemType>, "hasError"> &
  WidthProps &
  CommonCompProps;

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    name = "select",
    items = [],
    isOpen: initOpen,
    label,
    value,
    hasAsterisk,
    disabled,
    widthProps,
    onChange,
    className,
    testId = name,
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(initOpen || false);
  const [selectedItem, setSelectedItem] = useState<SelectItemType>(
    value || items[0]
  );

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const { triggerRef, elementRef } = useOutsideClick(handleOutsideClick);

  const toggleSelect = () => setIsOpen(!isOpen);
  const handleChange = (item: SelectItemType) => {
    if (disabled) {
      return;
    }

    setSelectedItem(item);
    onChange?.(item);
    setIsOpen(false);
  };

  /**
   * Render
   */

  const renderDisplayField = () => {
    return (
      <div
        className="display-field"
        aria-hidden="true"
        role="button"
        onClick={toggleSelect}
        ref={triggerRef}
      >
        {selectedItem.label}
        <ChevronSortIcon className="chevron-icon" />
      </div>
    );
  };

  const renderMenuOverlay = () => {
    if (!isOpen) {
      return;
    }

    const renderItemLabel = (item: SelectItemType) => {
      if (item.labelElement) {
        return <div className="item-label">{item.labelElement}</div>;
      }

      return <p className="item-label">{item.label}</p>;
    };

    return (
      <div className="menu-overlay" ref={elementRef}>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                aria-hidden="true"
                className="item-container"
              >
                {renderItemLabel(item)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "usy-select-container",
        {
          disabled: Boolean(disabled),
        },
        className
      )}
      style={{ ...(widthProps || { width: "100%" }) }}
      data-testid={testId}
      ref={ref}
    >
      {label && (
        <FieldLabel
          name={name}
          hasAsterisk={hasAsterisk}
          label={label}
          testId={`${testId}-title`}
        />
      )}
      {renderDisplayField()}
      {renderMenuOverlay()}
    </div>
  );
});
