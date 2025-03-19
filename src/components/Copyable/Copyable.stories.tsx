import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../.storybook/constants";

import { Copyable } from "./index";

const meta: Meta<typeof Copyable> = {
  component: Copyable,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => <Copyable text={`import { Avatar } from "usy-ui"`} />,
};

export default meta;
type Story = StoryObj<typeof Copyable>;
