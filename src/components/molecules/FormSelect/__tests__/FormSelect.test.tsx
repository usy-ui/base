import React from "react";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Select } from "..";

const mockLanguages = [
  {
    id: "javascript",
    label: "JavaScript",
    value: "javascript",
  },
  {
    id: "python",
    label: "Python",
    value: "python",
  },
];

describe("Select", () => {
  describe("Common Behavior", () => {
    it("should render component and label", () => {
      render(
        <Select
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      expect(screen.getByTestId("language-select")).toBeInTheDocument();
      expect(screen.getByText("Choose languages")).toBeInTheDocument();
    });

    it("should render options when clicking on menu trigger and close when clicking outside", async () => {
      render(
        <Select
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      // Open menu
      await userEvent.click(screen.getByTestId("language-select-menu-trigger"));

      const menuItemsElements = screen.getAllByTestId(
        "language-select-menu-overlay-item-container"
      );
      expect(menuItemsElements).toHaveLength(2);
      expect(menuItemsElements[0]).toHaveTextContent(mockLanguages[0].label);
      expect(menuItemsElements[1]).toHaveTextContent(mockLanguages[1].label);

      // Close menu
      await userEvent.click(document.body);

      const menuItemsElementsNotDisplay = screen.queryAllByTestId(
        "language-select-menu-overlay-item-container"
      );
      expect(menuItemsElementsNotDisplay).toHaveLength(0);
    });

    it("should render empty menu overlay if there is no option provided", async () => {
      render(
        <Select label="Choose languages" items={[]} testId="language-select" />
      );

      await userEvent.click(screen.getByTestId("language-select-menu-trigger"));

      expect(
        screen.queryAllByTestId("language-select-menu-overlay-item-container")
      ).toHaveLength(0);
      expect(screen.getByText("No option available")).toBeInTheDocument();
    });

    it("should pass selected option to onChange prop", async () => {
      const mockOnChange = jest.fn();
      render(
        <Select
          label="Choose languages"
          items={mockLanguages}
          onChange={mockOnChange}
          testId="language-select"
        />
      );

      await userEvent.click(screen.getByTestId("language-select-menu-trigger"));
      await userEvent.click(screen.getByText(mockLanguages[1].label));

      expect(mockOnChange).toHaveBeenCalledWith(mockLanguages[1]);
    });
  });

  describe("Type Select", () => {
    it("should render menu trigger as button", () => {
      render(
        <Select
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      expect(screen.getByTestId("language-select-menu-trigger").tagName).toBe(
        "DIV"
      );
    });
  });

  describe("Type Autocomplete", () => {
    it("should render menu trigger as input", () => {
      render(
        <Select
          type="autocomplete"
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      expect(screen.getByTestId("language-select-menu-trigger").tagName).toBe(
        "INPUT"
      );
    });

    it("should render filtered options if the input has value", async () => {
      render(
        <Select
          type="autocomplete"
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      const trigger = screen.getByTestId("language-select-menu-trigger");
      await userEvent.click(trigger);
      await userEvent.type(trigger, "java");

      expect(
        screen.getAllByTestId("language-select-menu-overlay-item-container")
      ).toHaveLength(1);
      expect(screen.getByText(mockLanguages[0].label)).toBeInTheDocument();
      expect(
        screen.queryByText(mockLanguages[1].label)
      ).not.toBeInTheDocument();
    });

    it("should render No result matching 'xxx' if the input has 'xxx' value", async () => {
      render(
        <Select
          type="autocomplete"
          label="Choose languages"
          items={mockLanguages}
          testId="language-select"
        />
      );

      const trigger = screen.getByTestId("language-select-menu-trigger");
      await userEvent.click(trigger);
      await userEvent.type(trigger, "nothing");

      expect(
        screen.queryAllByTestId("language-select-menu-overlay-item-container")
      ).toHaveLength(0);
      expect(
        screen.queryByText(mockLanguages[0].label)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(mockLanguages[1].label)
      ).not.toBeInTheDocument();
    });
  });
});
