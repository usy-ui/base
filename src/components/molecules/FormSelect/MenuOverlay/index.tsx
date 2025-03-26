import { FC, LegacyRef } from "react";

import { Flex } from "@src/components/atoms/LayoutFlex";
import { Typography } from "@src/components/atoms/Typography";
import { usySpacing } from "@src/design-tokens";

import { SelectItemType, SelectType } from "..";

/**
 * Types
 */

type SelectMenuOverlayProps = {
  items: SelectItemType[];
  selectType: SelectType;
  filterInput?: string;
  onSelect: (item: SelectItemType) => void;
  ref: LegacyRef<HTMLDivElement>;
};

/**
 * Component
 */

export const SelectMenuOverlay: FC<SelectMenuOverlayProps> = ({
  items,
  selectType,
  filterInput,
  onSelect,
  ref,
}) => {
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
            : `No options available`}
        </Typography>
      </Flex>
    );
  };

  return (
    <div className="usy-select-menu-overlay" ref={ref}>
      {items.length === 0 ? renderEmptyResult() : renderMenuItems()}
    </div>
  );
};
