import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Flex } from "../_Layout/Flex";
import { Button } from "../Button";

import { Popover } from "./index";

const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Top: Story = {
  render: () => (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px32}>
      <Popover content="This is this the first line" position="top-start">
        <Button>Top start</Button>
      </Popover>
      <Popover content="This is this the first line" position="top">
        <Button>Top</Button>
      </Popover>
      <Popover content="This is this the first line" position="top-end">
        <Button>Top end</Button>
      </Popover>
    </Flex>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Flex justifyContent="center" alignItems="center" gap={usySpacing.px32}>
      <Popover content="This is this the first line" position="bottom-start">
        <Button>Bottom start</Button>
      </Popover>
      <Popover content="This is this the first line" position="bottom">
        <Button>Bottom</Button>
      </Popover>
      <Popover content="This is this the first line" position="bottom-end">
        <Button>Bottom end</Button>
      </Popover>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Popover>;
