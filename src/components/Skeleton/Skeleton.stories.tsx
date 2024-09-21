import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../_Layout/Flex";

import { BarSkeleton, CircleSkeleton } from "./index";

const meta: Meta<typeof BarSkeleton> = {
  component: BarSkeleton,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    return (
      <Flex>
        <CircleSkeleton />
        <Flex direction="column">
          <BarSkeleton rows={4} />
          <BarSkeleton rows={2} widthProps={{ width: "200px" }} />
        </Flex>
      </Flex>
    );
  },
};

export default meta;
type Story = StoryObj<typeof BarSkeleton>;
