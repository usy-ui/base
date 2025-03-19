import React, { act } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "../index";

describe("Checkbox component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(<Checkbox label="Agree" checked testId="agree-check" />);

      const agreeCheckbox = screen.getByTestId(
        "agree-check-input"
      ) as HTMLInputElement;
      expect(agreeCheckbox).toBeInTheDocument();
      expect(agreeCheckbox.checked).toBeTruthy();
    });
  });

  describe("action", () => {
    it("should change the checked status when clicking", async () => {
      render(<Checkbox label="Agree" testId="agree-check" />);

      const agreeCheckbox = screen.getByTestId(
        "agree-check-input"
      ) as HTMLInputElement;

      await act(async () => {
        await userEvent.click(agreeCheckbox);
        expect(agreeCheckbox.checked).toBeTruthy();
      });
    });
  });
});
