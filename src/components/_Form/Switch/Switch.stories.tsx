import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";

import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  component: Switch,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    return (
      <>
        <Switch name="switch-1" label="Agree with term" size="small" />
        <Switch name="switch-2" label="Agree with term" size="medium" />
        <Switch name="switch-3" label="Agree with term" size="large" />
        <Switch name="switch-4" label="Agree with term" disabled />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;
