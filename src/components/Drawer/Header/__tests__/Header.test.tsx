import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DrawerHeader } from "../index";

const mockOnClose = jest.fn();

describe("DrawerHeader component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <DrawerHeader
          title="Usy UI"
          onClose={mockOnClose}
          testId="drawer-header"
        />
      );

      expect(screen.getByTestId("drawer-header").firstChild).toBeDefined();
      expect(screen.getByTestId("drawer-header-title")).toBeInTheDocument();
      expect(screen.getByTestId("drawer-header-close")).toBeInTheDocument();
    });
  });

  describe("action", () => {
    it("should trigger close when clicking", async () => {
      render(
        <DrawerHeader
          title="Usy UI"
          onClose={mockOnClose}
          testId="drawer-header"
        />
      );

      await userEvent.click(screen.getByTestId("drawer-header-close"));

      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
