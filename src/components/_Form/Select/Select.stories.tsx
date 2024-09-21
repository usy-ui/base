import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import {
  BrandFacebookIcon,
  BrandLinkedinIcon,
  BrandTwitterIcon,
} from "../../Icon";

import { Select, SelectItemType } from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    const animals: SelectItemType[] = [
      {
        id: "cats",
        label: "Cats",
        value: "cats",
      },
      {
        id: "dogs",
        label: "Dogs",
        value: "dogs",
      },
      {
        id: "fishes",
        label: "Fishes",
        value: "fishes",
      },
    ];

    const socials: SelectItemType[] = [
      {
        id: "facebook",
        label: "facebook",
        labelElement: (
          <>
            <BrandFacebookIcon />
            Cats
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
            Instagram
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
            Twitter
          </>
        ),
        value: "twitter",
      },
    ];

    return (
      <>
        <Select
          label="Select Animal"
          items={animals}
          onChange={(item) => alert(item.value)}
        />
        <Select
          label="Select Social"
          items={socials}
          onChange={(item) => alert(item.value)}
        />
        <Select
          label="Select Animal"
          items={animals}
          onChange={(item) => alert(item.value)}
          disabled
        />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;
