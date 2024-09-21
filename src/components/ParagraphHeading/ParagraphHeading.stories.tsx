import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../_Layout/Flex";

import { ParagraphHeading } from "./index";

const meta: Meta<typeof ParagraphHeading> = {
  component: ParagraphHeading,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex widthProps={{ width: "700px" }} direction="column">
      <ParagraphHeading
        title="Username"
        description="Choose a your own username"
      />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex widthProps={{ width: "700px" }} direction="column">
      <ParagraphHeading
        title="Username"
        description="Choose a your own username"
        titleSize="large"
      />
      <ParagraphHeading
        title="Username"
        description="Choose a your own username"
        titleSize="huge"
      />
      <ParagraphHeading
        title="Username"
        description="Choose a your own username"
        titleSize="gigant-1"
      />
      <ParagraphHeading
        title="Username"
        description="Choose a your own username"
        titleSize="gigant-2"
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof ParagraphHeading>;
