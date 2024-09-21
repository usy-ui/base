import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DrawerFooter } from "../index";

const mockPrimaryClick = jest.fn();
const mockNormalClick = jest.fn();
const buttons = [
  {
    label: "Primary",
    type: "primary",
    onClick: mockPrimaryClick,
    testId: "primary-button",
  },
  {
    label: "Normal",
    type: "normal",
    onClick: mockNormalClick,
    testId: "normal-button",
  },
];

describe("DrawerFooter component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(<DrawerFooter testId="drawer-footer" buttons={buttons} />);

      expect(screen.getByTestId("drawer-footer").firstChild).toBeDefined();
      expect(screen.getByTestId("primary-button")).toBeInTheDocument();
      expect(screen.getByTestId("normal-button")).toBeInTheDocument();
    });
  });

  describe("action", () => {
    it("should trigger button when clicking", async () => {
      render(<DrawerFooter testId="drawer-footer" buttons={buttons} />);

      await userEvent.click(screen.getByTestId("primary-button"));
      await userEvent.click(screen.getByTestId("normal-button"));

      expect(mockPrimaryClick).toHaveBeenCalled();
      expect(mockNormalClick).toHaveBeenCalled();
    });
  });
});
