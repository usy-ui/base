import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Flex } from "../_Layout/Flex";

import { Typography } from "./index";

const meta: Meta<typeof Typography> = {
  component: Typography,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Tags: Story = {
  render: () => (
    <>
      <Flex direction="column" gap={usySpacing.px20}>
        <Typography tag="h6">h6: Lorem Ipsum</Typography>
        <Typography tag="h5">h5: Lorem Ipsum</Typography>
        <Typography tag="h4">h4: Lorem Ipsum</Typography>
        <Typography tag="h3">h3: Lorem Ipsum</Typography>
        <Typography tag="h2">h2: Lorem Ipsum</Typography>
        <Typography tag="h1">h1: Lorem Ipsum</Typography>
      </Flex>
      <Flex direction="column" gap={usySpacing.px20}>
        <Typography tag="small">small: Lorem Ipsum</Typography>
        <Typography tag="label">label: Lorem Ipsum</Typography>
        <Typography tag="p">span: Lorem Ipsum</Typography>
        <Typography tag="p">p: Lorem Ipsum</Typography>
      </Flex>
      <Flex direction="column" gap={usySpacing.px20}>
        <Typography tag="mark">mark: Lorem Ipsum</Typography>
        <Typography tag="ins">ins: Lorem Ipsum</Typography>
        <Typography tag="del">del: Lorem Ipsum</Typography>
        <Typography tag="sub">sub: Lorem Ipsum</Typography>
        <Typography tag="sup">sup: Lorem Ipsum</Typography>
        <Typography tag="em">em: Lorem Ipsum</Typography>
        <Typography tag="strong">strong: Lorem Ipsum</Typography>
      </Flex>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Typography size="tiny">
        tiny:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="small">
        small:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="medium">
        medium:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="large">
        large:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="huge">
        huge:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="gigant-1">
        Gigant 1:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="gigant-2">
        Gigant 2:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
    </Flex>
  ),
};

export const Weights: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Typography weight="thin">100: thin</Typography>
      <Typography weight="light">200: light</Typography>
      <Typography weight="semilight">300: semilight</Typography>
      <Typography weight="normal">400: normal</Typography>
      <Typography weight="semibold">500: semibold</Typography>
      <Typography weight="bold">600: bold</Typography>
      <Typography weight="heavy">700: heavy</Typography>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap={usySpacing.px20}>
      <Typography color="primary" weight="heavy">
        Primary Color
      </Typography>
      <Typography color="red">Red Color</Typography>
      <Typography color="green">Green Color</Typography>
      <Typography color="blue">Blue Color</Typography>
      <Typography color="random">Random Color</Typography>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Typography>;
