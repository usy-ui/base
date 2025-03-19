import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../atoms/LayoutFlex";

import { TogglePanel } from "./index";

const meta: Meta<typeof TogglePanel> = {
  component: TogglePanel,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <Flex heightProps={{ minHeight: "300px" }} alignItems="flex-start">
      <TogglePanel title="Toggle Panel" widthProps={{ maxWidth: "500px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry is standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </TogglePanel>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof TogglePanel>;
