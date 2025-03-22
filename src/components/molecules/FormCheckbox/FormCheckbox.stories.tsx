import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";

import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <>
      <Checkbox label="Check me" />
      <Checkbox label="Check me" disabled />
      <Checkbox
        label="onClick"
        checked
        onChange={(checked) => alert(`is checked: ${checked}`)}
      />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
