import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal } from "../index";

const mockOnClose = jest.fn();

describe("Modal component", () => {
  describe("render", () => {
    it("should render component when mounted", () => {
      render(
        <Modal title="Lorem Modal" testId="lorem-modal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      expect(screen.getByTestId("lorem-modal")).toBeInTheDocument();
      expect(
        screen.getByText(/Lorem Ipsum is simply dummy text/i)
      ).toBeInTheDocument();
      expect(screen.getByText("Lorem Modal")).toBeInTheDocument();
    });

    it("should render close icon", () => {
      render(
        <Modal onClose={mockOnClose} testId="lorem-modal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      expect(screen.getByTestId("lorem-modal-close-icon")).toBeInTheDocument();
    });
  });
  describe("action", () => {
    it("should trigger onClose when clicking on close icon", async () => {
      render(
        <Modal title="Edit Profile" onClose={mockOnClose} testId="lorem-modal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Modal>
      );

      await userEvent.click(screen.getByTestId("lorem-modal-close-icon"));
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
