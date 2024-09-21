import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { Flex } from "../../_Layout/Flex";

import { Separator } from "./index";

const meta: Meta<typeof Separator> = {
  component: Separator,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column">
      <Separator
        title="horizontal"
        direction="horizontal"
        widthProps={{ width: "200px" }}
      />
      <Separator
        title="vertical"
        direction="vertical"
        heightProps={{ height: "200px" }}
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Separator>;
