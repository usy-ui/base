import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { usySpacing } from "../../../styles";
import { Flex } from "../../_Layout/Flex";

import { RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const items = [
  { id: "dog", label: "dog", value: "dog" },
  { id: "cat", label: "cat", value: "cat" },
  { id: "fish", label: "fish", value: "fish" },
];

export const Types: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={usySpacing.px20}>
        <RadioGroup
          name="animal-1"
          label="Select type"
          value={items[0]}
          items={items}
          direction="horizontal"
          onChange={(item) => alert(item.value)}
        />
        <RadioGroup
          name="animal-2"
          label="Select type"
          value={items[0]}
          items={items}
          direction="vertical"
        />
        <RadioGroup
          name="animal-3"
          label="Select type"
          value={items[0]}
          items={items}
          direction="vertical"
          disabled
        />
      </Flex>
    );
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;
