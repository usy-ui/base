import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal } from "../index";

const mockOnClose = jest.fn();

describe("Modal component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <Modal testId="edit-profile" isOpen>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      expect(screen.getByTestId("edit-profile").firstChild).toBeDefined();
    });

    it("should render title", () => {
      render(
        <Modal
          title="Edit Profile"
          onClose={mockOnClose}
          testId="edit-profile"
          isOpen
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      expect(
        screen.getByTestId("edit-profile-header-title")
      ).toBeInTheDocument();
    });

    it("should render close icon", () => {
      render(
        <Modal onClose={mockOnClose} testId="edit-profile" isOpen>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      expect(
        screen.getByTestId("edit-profile-header-close")
      ).toBeInTheDocument();
    });
  });
  describe("action", () => {
    it("should trigger onClose when clicking on close icon", async () => {
      render(
        <Modal
          title="Edit Profile"
          onClose={mockOnClose}
          testId="edit-profile"
          isOpen
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      await userEvent.click(screen.getByTestId("edit-profile-header-close"));

      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
