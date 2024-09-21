import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Flex } from "../_Layout/Flex";

import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  component: Badge,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Variants: Story = {
  render: () => (
    <Flex gap={usySpacing.px24} alignItems="center">
      <Badge variant="filled">filled</Badge>
      <Badge variant="outline">outline</Badge>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={usySpacing.px24} alignItems="center">
      <Badge size="small">small</Badge>
      <Badge size="medium">medium</Badge>
      <Badge size="large">large</Badge>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap={usySpacing.px24} alignItems="center">
      <Badge color="primary-light">primary light</Badge>
      <Badge color="primary">primary</Badge>
      <Badge color="primary-dark">primary dark</Badge>
      <Badge color="random">random</Badge>
    </Flex>
  ),
};

export const Radius: Story = {
  render: () => (
    <Flex direction="column">
      <Flex gap={usySpacing.px24} alignItems="center">
        <Badge radius="none">none</Badge>
        <Badge radius="small">small</Badge>
        <Badge radius="medium">medium</Badge>
        <Badge radius="large">large</Badge>
        <Badge radius="full">full</Badge>
      </Flex>
      <br />
      <Flex gap={usySpacing.px24} alignItems="center">
        <Badge radius="none" size="large">
          none none
        </Badge>
        <Badge radius="small" size="large">
          small small
        </Badge>
        <Badge radius="medium" size="large">
          medium medium
        </Badge>
        <Badge radius="large" size="large">
          large large
        </Badge>
        <Badge radius="full" size="large">
          full full
        </Badge>
      </Flex>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Badge>;
