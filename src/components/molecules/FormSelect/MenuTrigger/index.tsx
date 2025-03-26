import { ChangeEvent, forwardRef, LegacyRef } from "react";

import clsx from "clsx";

import { ChevronSortIcon, SearchIcon } from "@src/components/atoms/Icon";

import { SelectItemType, SelectType } from "..";
import { CommonCompProps, FormFieldProps } from "../../../../@types";

/**
 * Types
 */

type PureSelectMenuTriggerProps = {
  selectType: SelectType;
  selectedItem?: SelectItemType;
  filterInput?: string;
  openMenuOverlay: () => void;
  onFilterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type SelectMenuTriggerProps = PureSelectMenuTriggerProps &
  Pick<FormFieldProps<SelectItemType>, "hasError"> &
  CommonCompProps;

/**
 * Component
 */

export const SelectMenuTrigger = forwardRef<
  HTMLDivElement | HTMLInputElement,
  SelectMenuTriggerProps
>(function SelectMenuTrigger(
  {
    selectType,
    selectedItem,
    filterInput,
    openMenuOverlay,
    onFilterInputChange,
    hasError,
    className,
    name = "select-menu-trigger",
    testId = name,
  },
  ref
) {
  if (selectType === "select") {
    return (
      <div
        role="button"
        aria-hidden="true"
        onClick={openMenuOverlay}
        className={clsx(
          "usy-select-menu-trigger-select-option",
          {
            "has-error": Boolean(hasError),
          },
          className
        )}
        ref={ref as LegacyRef<HTMLDivElement>}
        data-testid={testId}
      >
        {selectedItem?.label || "Choose"}
        <ChevronSortIcon className="describe-icon" />
      </div>
    );
  }

  if (selectType === "autocomplete") {
    return (
      <div
        className={clsx("usy-select-menu-trigger-autocomplete-input", {
          "has-error": Boolean(hasError),
        })}
      >
        <input
          value={filterInput}
          onFocus={openMenuOverlay}
          onChange={onFilterInputChange}
          placeholder="Type to search..."
          className="filter-input"
          ref={ref as LegacyRef<HTMLInputElement>}
          data-testid={testId}
        />
        <SearchIcon className="describe-icon" />
      </div>
    );
  }

  return null;
});
