import React, { act } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TogglePanel } from "../index";

const togglePanelContent = `
  Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry is standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book
`;

describe("ToggleSection", () => {
  describe("render", () => {
    it("should render component and children", () => {
      render(
        <TogglePanel title="Lorem Ipsum" testId="lorem">
          {togglePanelContent}
        </TogglePanel>
      );

      expect(screen.getByTestId("lorem-header")).toBeInTheDocument();
      expect(screen.getByTestId("lorem-header-title")).toBeInTheDocument();
      expect(
        screen.getByTestId("lorem-header-toggle-icon")
      ).toBeInTheDocument();
      expect(screen.getByTestId("lorem-content")).toHaveTextContent(
        /Lorem Ipsum is simply dummy text/i
      );
    });
  });
  describe("action", () => {
    it("should trigger onToggle prop when clicking on toggle icon", async () => {
      const mockOnToggle = jest.fn();
      render(
        <TogglePanel title="Usy UI" onToggle={mockOnToggle} testId="lorem">
          {togglePanelContent}
        </TogglePanel>
      );

      await act(async () => {
        await userEvent.click(screen.getByTestId("lorem-header-toggle-icon"));
        expect(mockOnToggle).toHaveBeenCalled();
      });
    });
  });
});
