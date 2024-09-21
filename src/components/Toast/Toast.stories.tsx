import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Toast, toastIns } from "./index";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <>
      <Toast />
      <button
        onClick={() => {
          toastIns.success({
            title: "Success",
            description: "Your register has been approval",
          });
        }}
      >
        success toast
      </button>
      <button
        onClick={() => {
          toastIns.info({
            title: "Step 2",
            description: "Wait a second to loading next step",
          });
        }}
      >
        info toast
      </button>
      <button
        onClick={() => {
          toastIns.warning({
            title: "Invalid Info",
            description: "Your info has some invalid fields",
          });
        }}
      >
        warning toast
      </button>
      <button
        onClick={() => {
          toastIns.error({
            title: "Not Found",
            description: "The page can not be found",
          });
        }}
      >
        error toast
      </button>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Toast>;
