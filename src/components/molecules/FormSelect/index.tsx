"use client";
import {
  ChangeEvent,
  forwardRef,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

import clsx from "clsx";

import { FieldDescription } from "@src/components/atoms/FieldDescription";
import { useOutsideClick, useSyncOuterValue } from "@src/hooks";

import { CommonCompProps, FormFieldProps, WidthProps } from "../../../@types";
import { FieldLabel, PureFieldLabelProps } from "../../atoms/FieldLabel";

import { SelectMenuOverlay } from "./MenuOverlay";
import { SelectMenuTrigger } from "./MenuTrigger";

/**
 * Types
 */

export type SelectType = "select" | "autocomplete";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SelectItemType<T = any> = {
  id: string | number;
  label: string;
  labelElement?: ReactNode;
  value: T;
};

type PureSelectProps = {
  items: SelectItemType[];
  type?: SelectType;
  description?: ReactNode;
  isOpen?: boolean;
};

export type SelectProps = PureSelectProps &
  PureFieldLabelProps &
  Pick<
    FormFieldProps<SelectItemType>,
    "value" | "hasError" | "disabled" | "onChange"
  > &
  WidthProps &
  CommonCompProps;

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    items = [],
    type = "select",
    description,
    isOpen: initOpen,
    label,
    hasAsterisk,
    value,
    hasError,
    disabled,
    onChange,
    widthProps,
    className,
    name = "select",
    testId = name,
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(initOpen || false);
  const [filterInput, setFilterInput] = useState("");
  const [selectedItem, setSelectedItem] = useState<SelectItemType | undefined>(
    value
  );
  useSyncOuterValue<SelectItemType | undefined>(setSelectedItem, value);

  const proceedItemsMemo = useMemo<SelectItemType[]>(() => {
    if (type === "autocomplete" || filterInput) {
      return items.filter((item) =>
        item.label.toLowerCase().includes(filterInput.toLowerCase())
      );
    }

    return items;
  }, [type, items, filterInput]);

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const { triggerRef, elementRef } = useOutsideClick<
    HTMLDivElement | HTMLInputElement
  >(handleOutsideClick);

  const openMenuOverlay = () => setIsOpen(!isOpen);

  const handleFilterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  const handleSelectItem = (item: SelectItemType) => {
    if (disabled) {
      return;
    }

    if (type === "autocomplete") {
      setFilterInput(item.label);
    }

    setSelectedItem(item);
    onChange?.(item);
    setIsOpen(false);
  };

  /**
   * Render
   */

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
      <SelectMenuTrigger
        selectType={type}
        selectedItem={selectedItem}
        filterInput={filterInput}
        hasError={hasError}
        openMenuOverlay={openMenuOverlay}
        onFilterInputChange={handleFilterInputChange}
        ref={triggerRef}
      />
      {isOpen && (
        <SelectMenuOverlay
          items={proceedItemsMemo}
          selectType={type}
          filterInput={filterInput}
          onSelect={handleSelectItem}
          ref={elementRef}
        />
      )}
      {description && (
        <FieldDescription
          description={description}
          testId={`${testId}-description`}
        />
      )}
    </div>
  );
});
