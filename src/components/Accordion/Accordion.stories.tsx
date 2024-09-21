import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Accordion
      items={[
        { id: "panel-1", title: "Panel 1", content: "This is panel 1" },
        { id: "panel-2", title: "Panel 2", content: "This is panel 2" },
        { id: "panel-3", title: "Panel 3", content: "This is panel 3" },
      ]}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof Accordion>;
