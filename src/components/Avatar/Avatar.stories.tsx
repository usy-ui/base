import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Flex } from "../_Layout/Flex";

import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const avatarUrl =
  "https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg";

export const Radius: Story = {
  render: () => (
    <Flex gap={usySpacing.px32}>
      <Avatar src={avatarUrl} imgAlt="Avatar" radius="none" />
      <Avatar src={avatarUrl} imgAlt="Avatar" radius="small" />
      <Avatar src={avatarUrl} imgAlt="Avatar" radius="medium" />
      <Avatar src={avatarUrl} imgAlt="Avatar" radius="large" />
      <Avatar src={avatarUrl} imgAlt="Avatar" radius="full" />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={usySpacing.px32} alignItems="center">
      <Avatar src={avatarUrl} imgAlt="Avatar" size="tiny" />
      <Avatar src={avatarUrl} imgAlt="Avatar" size="small" />
      <Avatar src={avatarUrl} imgAlt="Avatar" size="medium" />
      <Avatar src={avatarUrl} imgAlt="Avatar" size="large" />
      <Avatar src={avatarUrl} imgAlt="Avatar" size="huge" />
    </Flex>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Flex gap={usySpacing.px32}>
      <Avatar src="" fallback="R" color="random" />
      <Avatar src="" fallback="P" color="primary" />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Avatar>;
