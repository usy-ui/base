import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { usySpacing } from "../../../styles";
import { Flex } from "../../_Layout/Flex";
import { EnvelopeIcon, InfoCircleIcon } from "../../Icon";

import { Input } from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px32}>
      <Input
        label="Email"
        placeholder="Enter your email"
        iconLeft={<EnvelopeIcon width="18px" height="18px" />}
        hasAsterisk
      />
      <Input
        placeholder="Enter your email"
        iconRight={<InfoCircleIcon width="18px" height="18px" />}
      />
      <Input
        placeholder="Enter your email"
        description="This field cannot be empty"
        hasError
      />
      <Input
        placeholder="Enter your email"
        description="This field cannot be empty"
        disabled
      />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px32}>
      <Input label="Small" placeholder="Enter your email" size="small" />
      <Input label="Medium" placeholder="Enter your email" size="medium" />
      <Input label="Large" placeholder="Enter your email" size="large" />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;
