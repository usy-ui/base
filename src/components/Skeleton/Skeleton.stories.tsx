import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../_Layout/Flex";

import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
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
        <Skeleton type="circle" />
        <Flex direction="column">
          <Skeleton type="bars" numOfBars={4} />
          <Skeleton type="bars" numOfBars={2} widthProps={{ width: "200px" }} />
        </Flex>
      </Flex>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;
