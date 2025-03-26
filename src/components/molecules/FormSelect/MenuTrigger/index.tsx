import { ChangeEvent, FC, LegacyRef } from "react";

import clsx from "clsx";

import { ChevronSortIcon, SearchIcon } from "@src/components/atoms/Icon";

import { SelectItemType, SelectType } from "..";
import { FormFieldProps } from "../../../../@types";

/**
 * Types
 */

type PureSelectMenuTriggerProps = {
  selectType: SelectType;
  selectedItem?: SelectItemType;
  filterInput?: string;
  openMenuOverlay: () => void;
  onFilterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref: LegacyRef<HTMLDivElement | HTMLInputElement>;
};

type SelectMenuTriggerProps = PureSelectMenuTriggerProps &
  Pick<FormFieldProps<SelectItemType>, "hasError">;

/**
 * Component
 */

export const SelectMenuTrigger: FC<SelectMenuTriggerProps> = ({
  selectType,
  selectedItem,
  filterInput,
  openMenuOverlay,
  onFilterInputChange,
  ref,
  hasError,
}) => {
  if (selectType === "select") {
    return (
      <div
        role="button"
        aria-hidden="true"
        onClick={openMenuOverlay}
        className={clsx("usy-select-menu-trigger-select-option", {
          "has-error": Boolean(hasError),
        })}
        ref={ref as LegacyRef<HTMLDivElement>}
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
        />
        <SearchIcon className="describe-icon" />
      </div>
    );
  }

  return null;
};
