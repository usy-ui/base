import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";

import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  component: Switch,
  ...defaultSbCompMetaProps,
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
