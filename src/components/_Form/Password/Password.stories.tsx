import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../_Layout/Flex";

import { Password } from "./index";

const meta: Meta<typeof Password> = {
  component: Password,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap="30px">
      <Password label="Password" placeholder="Enter your password" />
      <Password
        label="Password"
        placeholder="Enter your password"
        description="This field is required"
        hasError
      />
      <Password
        label="Password"
        placeholder="Enter your password"
        description="This field is required"
        disabled
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Password>;
