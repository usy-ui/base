import { forwardRef } from "react";

import clsx from "clsx";

import { Flex } from "@src/components/atoms/LayoutFlex";
import { Typography } from "@src/components/atoms/Typography";
import { usySpacing } from "@src/design-tokens";

import { SelectItemType, SelectType } from "..";
import { CommonCompProps } from "../../../../@types";

/**
 * Types
 */

type SelectMenuOverlayProps = {
  isOpen: boolean;
  items: SelectItemType[];
  selectType: SelectType;
  filterInput?: string;
  onSelect: (item: SelectItemType) => void;
} & CommonCompProps;

/**
 * Component
 */

export const SelectMenuOverlay = forwardRef<
  HTMLDivElement,
  SelectMenuOverlayProps
>(function SelectMenuOverlay(
  {
    isOpen,
    items,
    selectType,
    filterInput,
    onSelect,
    className,
    name = "select-menu-overlay",
    testId = name,
  },
  ref
) {
  const renderItem = (item: SelectItemType) => {
    if (item.labelElement) {
      return <div className="item-label">{item.labelElement}</div>;
    }

    return <Typography className="item-label">{item.label}</Typography>;
  };

  const renderMenuItems = () => {
    return (
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => onSelect(item)}
              aria-hidden="true"
              className="item-container"
              data-testid={`${testId}-item-container`}
            >
              {renderItem(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderEmptyResult = () => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        heightProps={{ minHeight: "50px" }}
        paddingProps={{ padding: usySpacing.px16 }}
      >
        <Typography size="small" color="dark-3">
          {selectType === "autocomplete"
            ? `No result matching '${filterInput}'`
            : `No option available`}
        </Typography>
      </Flex>
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={clsx("usy-select-menu-overlay", className)}
      ref={ref}
      data-testid={testId}
    >
      {items.length === 0 ? renderEmptyResult() : renderMenuItems()}
    </div>
  );
});
