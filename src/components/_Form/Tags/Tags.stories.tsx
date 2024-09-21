import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";

import { Tags } from "./index";

const meta: Meta<typeof Tags> = {
  component: Tags,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Tags
      label="Animals"
      tags={["cats", "dogs", "ducks"]}
      widthProps={{ maxWidth: "300px", width: "300px" }}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof Tags>;
