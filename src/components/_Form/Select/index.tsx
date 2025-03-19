"use client";
import {
  ChangeEvent,
  forwardRef,
  LegacyRef,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

import clsx from "clsx";

import { Flex } from "@src/components/_atoms/LayoutFlex";
import { Typography } from "@src/components/_atoms/Typography";
import { useOutsideClick, useSyncOuterValue } from "@src/hooks";
import { usySpacing } from "@src/styles";

import { CommonCompProps, FormFieldProps, WidthProps } from "../../../@types";
import { FieldLabel, PureFieldLabelProps } from "../../_atoms/FieldLabel";
import { ChevronSortIcon, SearchIcon } from "../../Icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SelectItemType<T = any> = {
  id: string | number;
  label: string;
  labelElement?: ReactNode;
  value: T;
};

type PureSelectProps = {
  items: SelectItemType[];
  type?: "select" | "autocomplete";
  isOpen?: boolean;
};

export type SelectProps = PureSelectProps &
  PureFieldLabelProps &
  Pick<FormFieldProps<SelectItemType>, "value" | "disabled" | "onChange"> &
  WidthProps &
  CommonCompProps;

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    type = "select",
    items = [],
    isOpen: initOpen,
    label,
    hasAsterisk,
    value,
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
  const [selectedItem, setSelectedItem] = useState<SelectItemType>(
    value || items[0]
  );
  useSyncOuterValue<SelectItemType>(setSelectedItem, value || items[0]);

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

  const toggleSelect = () => setIsOpen(!isOpen);

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

  const renderSelectedOption = () => {
    if (type === "select") {
      return (
        <div
          role="button"
          aria-hidden="true"
          onClick={toggleSelect}
          className="selected-option"
          ref={triggerRef as LegacyRef<HTMLDivElement>}
        >
          {selectedItem.label}
          <ChevronSortIcon className="describe-icon" />
        </div>
      );
    }

    if (type === "autocomplete") {
      return (
        <div className="autocomplete-input">
          <input
            value={filterInput}
            onFocus={toggleSelect}
            onChange={handleFilterInputChange}
            placeholder="Type to search..."
            className="filter-input"
            ref={triggerRef as LegacyRef<HTMLInputElement>}
          />
          <SearchIcon className="describe-icon" />
        </div>
      );
    }
  };

  const renderMenuItems = () => {
    const renderDisplayItem = (item: SelectItemType) => {
      if (item.labelElement) {
        return <div className="item-label">{item.labelElement}</div>;
      }

      return <Typography className="item-label">{item.label}</Typography>;
    };

    return (
      <ul>
        {proceedItemsMemo.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => handleSelectItem(item)}
              aria-hidden="true"
              className="item-container"
            >
              {renderDisplayItem(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMenuEmptyResult = () => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        heightProps={{ minHeight: "50px" }}
        paddingProps={{ padding: usySpacing.px16 }}
      >
        <Typography size="small" color="dark-3">
          {type === "autocomplete"
            ? `No result matching '${filterInput}'`
            : `No result found`}
        </Typography>
      </Flex>
    );
  };

  const renderMenuOverlay = () => {
    if (!isOpen) {
      return;
    }

    return (
      <div className="menu-overlay" ref={elementRef}>
        {proceedItemsMemo.length === 0
          ? renderMenuEmptyResult()
          : renderMenuItems()}
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
      {renderSelectedOption()}
      {renderMenuOverlay()}
    </div>
  );
});
