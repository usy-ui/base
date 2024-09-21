import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Flex } from "../_Layout/Flex";
import { AngleDownIcon, CaretLeftIcon, CaretRightIcon } from "../Icon";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Flex gap={usySpacing.px20}>
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="normal">Normal</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="normal" disabled>
          Disabled
        </Button>
      </Flex>
      <Flex gap={usySpacing.px20}>
        <Button variant="primary" noSole>
          Primary
        </Button>
        <Button variant="outline" noSole>
          Outline
        </Button>
        <Button variant="normal" noSole>
          Normal
        </Button>
        <Button variant="invisible">Invisible</Button>
      </Flex>
      <Flex gap={usySpacing.px20}>
        <Button variant="normal" loading>
          Loading
        </Button>
        <Button
          variant="normal"
          iconLeft={<CaretLeftIcon width="18px" height="18px" />}
        >
          Left Icon
        </Button>
        <Button
          variant="normal"
          iconRight={<CaretRightIcon width="18px" height="18px" />}
        >
          Right Icon
        </Button>
        <Button>
          <AngleDownIcon />
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Flex alignItems="center" gap={usySpacing.px20}>
        <Button variant="normal" size="tiny">
          tiny
        </Button>
        <Button variant="normal" size="small">
          small
        </Button>
        <Button variant="normal" size="medium">
          medium
        </Button>
        <Button variant="normal" size="large">
          large
        </Button>
      </Flex>
      <Flex alignItems="center" gap={usySpacing.px20}>
        <Button variant="normal" size="small">
          <AngleDownIcon />
        </Button>
        <Button variant="normal" size="medium">
          <AngleDownIcon />
        </Button>
        <Button variant="normal" size="large">
          <AngleDownIcon />
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Radius: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Flex alignItems="center" gap={usySpacing.px20}>
        <Button variant="normal" size="small" radius="none">
          radius small
        </Button>
        <Button variant="normal" size="small" radius="small">
          radius small
        </Button>
        <Button variant="normal" size="small" radius="medium">
          radius medium
        </Button>
        <Button variant="normal" size="small" radius="large">
          radius large
        </Button>
        <Button variant="normal" size="small" radius="full">
          radius small
        </Button>
      </Flex>
      <Flex alignItems="center" gap={usySpacing.px20}>
        <Button variant="normal" size="medium" radius="none">
          radius small
        </Button>
        <Button variant="normal" size="medium" radius="small">
          radius small
        </Button>
        <Button variant="normal" size="medium" radius="medium">
          radius medium
        </Button>
        <Button variant="normal" size="medium" radius="large">
          radius large
        </Button>
        <Button variant="normal" size="medium" radius="full">
          radius small
        </Button>
      </Flex>
      <Flex alignItems="center" gap={usySpacing.px20}>
        <Button variant="normal" size="large" radius="none">
          radius small
        </Button>
        <Button variant="normal" size="large" radius="small">
          radius small
        </Button>
        <Button variant="normal" size="large" radius="medium">
          radius medium
        </Button>
        <Button variant="normal" size="large" radius="large">
          radius large
        </Button>
        <Button variant="normal" size="large" radius="full">
          radius small
        </Button>
      </Flex>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;
