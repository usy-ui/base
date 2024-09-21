import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { Box } from "../../_Layout/Box";
import { ParagraphHeading } from "../../ParagraphHeading";

import { Panel } from "./index";

const meta: Meta<typeof Panel> = {
  component: Panel,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Box widthProps={{ width: "700px" }}>
      <Panel title={<ParagraphHeading title="User Profile" size="huge" />}>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </Panel>
    </Box>
  ),
};

export default meta;
type Story = StoryObj<typeof Panel>;
