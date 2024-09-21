import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { ImageGallery } from "./index";

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <ImageGallery
      images={[
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wonderful_Nature_Beauty.jpg/2560px-Wonderful_Nature_Beauty.jpg",
          shape: "big",
        },
        {
          url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
          shape: "normal",
        },
        {
          url: "https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          shape: "wide",
        },
        {
          url: "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
          shape: "normal",
        },
        {
          url: "https://images.unsplash.com/photo-1476970980147-71209edbfa4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          shape: "normal",
        },
        {
          url: "https://images.unsplash.com/photo-1449867727329-3294ea016353?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          shape: "tall",
        },
        {
          url: "https://images.unsplash.com/photo-1499748926165-1085fc69e9fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          shape: "wide",
        },
      ]}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;
