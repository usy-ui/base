import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Copyable } from "./index";

const meta: Meta<typeof Copyable> = {
  component: Copyable,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => <Copyable text={`import { Avatar } from "usy-ui"`} />,
};

export default meta;
type Story = StoryObj<typeof Copyable>;
