import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../_atoms/LayoutFlex";

import { Separator } from "./index";

const meta: Meta<typeof Separator> = {
  component: Separator,
  ...defaultSbCompMetaProps,
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
