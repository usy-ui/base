import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../_Layout/Flex";
import { Button } from "../Button";
import { Typography } from "../Typography";

import { DrawerFooter } from "./Footer";
import { DrawerHeader } from "./Header";

import { Drawer } from "./index";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const TriggerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Drawer</Button>
      {isOpen && (
        <Drawer
          preventOutsideClose
          onClose={closeModal}
          header={<DrawerHeader title="Drawer" onClose={closeModal} />}
          footer={
            <DrawerFooter
              alignContent="center"
              buttons={[
                {
                  variant: "primary",
                  children: "Confirm",
                  onClick: () => alert("Confirmed"),
                },
                {
                  variant: "normal",
                  children: "Cancel",
                  onClick: () => alert("Canceled"),
                },
              ]}
            />
          }
        >
          {Array(6)
            .fill("drawer")
            .map((item, index) => (
              <Typography key={`${item}-${index}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
            ))}
        </Drawer>
      )}
    </>
  );
};

export const Types: Story = {
  render: () => (
    <Flex
      heightProps={{ minHeight: "150vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <TriggerDrawer />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Drawer>;
