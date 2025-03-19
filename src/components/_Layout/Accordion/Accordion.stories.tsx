import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { usySpacing } from "@src/styles";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../_atoms/LayoutFlex";

import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <Flex
      direction="column"
      gap={usySpacing.px32}
      widthProps={{ minWidth: "400px" }}
    >
      <Accordion
        items={[
          { id: "panel-1", title: "Panel 1", content: "This is panel 1" },
          { id: "panel-2", title: "Panel 2", content: "This is panel 2" },
          { id: "panel-3", title: "Panel 3", content: "This is panel 3" },
        ]}
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Accordion>;
