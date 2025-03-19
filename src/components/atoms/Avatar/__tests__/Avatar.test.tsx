import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockAvatarUrl } from "@src/mocks/testing";

import { Avatar } from "..";

describe("Avatar", () => {
  describe("render", () => {
    test("should render component and children", () => {
      render(
        <Avatar
          src={mockAvatarUrl}
          imgAlt="susan-avatar"
          testId="susan-avatar"
        />
      );

      expect(screen.getByTestId("susan-avatar")).toBeInTheDocument();
      expect(screen.getByTestId("susan-avatar-image")).toHaveProperty(
        "src",
        mockAvatarUrl
      );
      expect(screen.getByTestId("susan-avatar-image")).toHaveProperty(
        "alt",
        "susan-avatar"
      );
    });

    test("should render fallback text if src prop is empty", () => {
      const fallback = "A";
      render(
        <Avatar
          src=""
          imgAlt="susan-avatar"
          fallback={fallback}
          testId="susan-avatar"
        />
      );

      expect(screen.getByTestId("susan-avatar")).toHaveTextContent(fallback);
    });
  });

  describe("actions", () => {
    test("should trigger onClick prop when avatar is clicked", async () => {
      const mockOnClick = jest.fn();
      render(
        <Avatar
          src=""
          imgAlt="susan-avatar"
          onClick={mockOnClick}
          testId="susan-avatar"
        />
      );

      await userEvent.click(screen.getByTestId("susan-avatar"));
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
