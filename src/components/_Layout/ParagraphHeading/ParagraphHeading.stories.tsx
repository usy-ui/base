import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../_atoms/LayoutFlex";

import { ParagraphHeading } from "./index";

const meta: Meta<typeof ParagraphHeading> = {
  component: ParagraphHeading,
  ...defaultSbCompMetaProps,
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
