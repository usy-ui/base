import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@src/components/atoms/LayoutFlex";
import { usySpacing } from "@src/design-tokens";

import {
  defaultSbCompMetaProps,
  listOfAnimals,
} from "../../../../.storybook/constants";
import {
  BrandFacebookIcon,
  BrandLinkedinIcon,
  BrandTwitterIcon,
} from "../../atoms/Icon";

import { Select, SelectItemType } from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => {
    const socials: SelectItemType[] = [
      {
        id: "facebook",
        label: "facebook",
        labelElement: (
          <>
            <BrandFacebookIcon />
            &nbsp;&nbsp;Cats
          </>
        ),
        value: "facebook",
      },
      {
        id: "linkedin",
        label: "Linkedin",
        labelElement: (
          <>
            <BrandLinkedinIcon />
            &nbsp;&nbsp;Instagram
          </>
        ),
        value: "linkedin",
      },
      {
        id: "twitter",
        label: "Twitter",
        labelElement: (
          <>
            <BrandTwitterIcon />
            &nbsp;&nbsp;Twitter
          </>
        ),
        value: "twitter",
      },
    ];

    return (
      <Flex alignItems="flex-start" gap={usySpacing.px32}>
        <Select
          type="autocomplete"
          label="Select Animal"
          items={listOfAnimals}
          onChange={(item) => alert(item.value)}
          widthProps={{ minWidth: "140px" }}
        />
        <Select
          label="Select Social"
          items={socials}
          onChange={(item) => alert(item.value)}
          widthProps={{ minWidth: "140px" }}
        />
        <Select
          type="autocomplete"
          label="Select Animal"
          items={listOfAnimals}
          onChange={(item) => alert(item.value)}
          widthProps={{ minWidth: "140px" }}
          hasError
          description="This field is required"
        />
        <Select
          label="Select Social"
          items={socials}
          onChange={(item) => alert(item.value)}
          widthProps={{ minWidth: "140px" }}
          hasError
          description="This field is required"
        />
        <Select
          label="Select Animal"
          items={listOfAnimals}
          onChange={(item) => alert(item.value)}
          widthProps={{ minWidth: "140px" }}
          disabled
        />
      </Flex>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;
