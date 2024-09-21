import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { MenuSeparator } from "./MenuOverlay/MenuSeparator";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuOverlay,
  DropdownMenuItem,
} from "./index";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const dropdownOverlayItems = (
  <>
    <DropdownMenuItem
      onClick={() => {
        alert("Change password");
      }}
    >
      Change Password
    </DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <MenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </>
);

export const Types: Story = {
  render: () => (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span>Overlay Top</span>
        </DropdownMenuTrigger>
        <DropdownMenuOverlay position="top">
          {dropdownOverlayItems}
        </DropdownMenuOverlay>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span>Overlay Bottom</span>
        </DropdownMenuTrigger>
        <DropdownMenuOverlay position="bottom">
          {dropdownOverlayItems}
        </DropdownMenuOverlay>
      </DropdownMenu>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;
