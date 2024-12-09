import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Button } from "../Button";
import { LockTimeIcon } from "../Icon";

import { Toast, globalToast } from "./index";

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
      <Button
        onClick={() => {
          globalToast.basic({
            statusIcon: LockTimeIcon,
            content: <span>Do not forget to checkout on time</span>,
            timeout: 10000,
            styles: {
              backgroundColor: "#000",
              border: "none",
              color: "#fff",
            },
          });
        }}
      >
        Basic
      </Button>
      <Button
        onClick={() => {
          globalToast.success({
            title: "Success",
            content: "Your register has been approval",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          globalToast.info({
            title: "Step 2",
            content: "Wait a second to loading next step",
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          globalToast.warning({
            title: "Invalid Info",
            content: "Your info has some invalid fields",
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          globalToast.error({
            title: "Not Found",
            content: "The page can not be found",
          });
        }}
      >
        Error
      </Button>
    </>
  ),
};

export const Position: Story = {
  render: () => (
    <>
      <Toast name="topEnd" position="top-start">
        {({ selfToast }) => (
          <>
            <Button
              onClick={() => {
                selfToast.success({
                  content: "Display on top-start",
                });
              }}
            >
              Top Start
            </Button>
          </>
        )}
      </Toast>
      <Toast name="topEnd" position="top-end">
        {({ selfToast }) => (
          <>
            <Button
              onClick={() => {
                selfToast.success({
                  content: "Display on top-end",
                });
              }}
            >
              Top End
            </Button>
          </>
        )}
      </Toast>
      <Toast name="topEnd" position="bottom-start">
        {({ selfToast }) => (
          <>
            <Button
              onClick={() => {
                selfToast.success({
                  content: "Display on bottom-start",
                });
              }}
            >
              Bottom Start
            </Button>
          </>
        )}
      </Toast>
      <Toast name="topEnd" position="bottom-end">
        {({ selfToast }) => (
          <>
            <Button
              onClick={() => {
                selfToast.success({
                  content: "Display on bottom-end",
                });
              }}
            >
              Bottom End
            </Button>
          </>
        )}
      </Toast>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Toast>;
