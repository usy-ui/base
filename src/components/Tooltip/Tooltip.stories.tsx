import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Button } from "../Button";

import { Tooltip } from "./index";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <>
      <Tooltip content="This is this the first line" position="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="This is this the first line" position="right">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip content="This is this the first line" position="bottom">
        <Button>Button</Button>
      </Tooltip>

      <Tooltip content="This is this the first line" position="left">
        <Button>Left</Button>
      </Tooltip>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Tooltip>;
