import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";

import { Tags } from "./index";

const meta: Meta<typeof Tags> = {
  component: Tags,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <Tags
      label="Animals"
      tags={["cats", "dogs", "ducks"]}
      widthProps={{ maxWidth: "500px", width: "500px" }}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof Tags>;
