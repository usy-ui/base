import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { usySpacing } from "@src/styles";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Flex } from "../../_atoms/LayoutFlex";

import { TextArea } from "./index";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  ...defaultSbCompMetaProps,
};

export const Types: Story = {
  render: () => (
    <Flex
      direction="column"
      gap={usySpacing.px32}
      widthProps={{ minWidth: "400px" }}
    >
      <TextArea label="About me" placeholder="How is your day?" />
      <TextArea
        label="About me"
        placeholder="How is your day?"
        description="This field is required"
        hasError
      />
      <TextArea
        label="About me"
        placeholder="How is your day?"
        description="This field is required"
        disabled
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof TextArea>;
