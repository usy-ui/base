import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { defaultSbCompMetaProps } from "../../../../.storybook/constants";
import { Button } from "../../_atoms/Button";
import { Flex } from "../../_atoms/LayoutFlex";

import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  component: Modal,
  ...defaultSbCompMetaProps,
};

const TriggerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      {isOpen && (
        <Modal title="Modal" onClose={closeModal}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Modal>
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
      <TriggerModal />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Modal>;
