import React from "react";

import { render, screen } from "@testing-library/react";

import { EnvelopeIcon, InfoCircleIcon } from "../../../Icon";
import { Input } from "../index";

const mockOnChange = jest.fn();
const mockOnBlur = jest.fn();

describe("Input component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <Input
          label="Email"
          placeholder="Enter your email"
          description="This field is empty"
          iconLeft={<EnvelopeIcon width="18px" height="18px" />}
          iconRight={<InfoCircleIcon width="18px" height="18px" />}
          onChange={mockOnChange}
          onBlur={mockOnBlur}
          testId="email"
        />
      );

      expect(screen.getByTestId("email-title")).toBeInTheDocument();
      expect(screen.getByTestId("email-description")).toBeInTheDocument();
      expect(screen.getByTestId("email-input")).toBeInTheDocument();
      expect(screen.getByTestId("email-icon-left")).toBeInTheDocument();
      expect(screen.getByTestId("email-icon-right")).toBeInTheDocument();
    });
  });
  describe("action", () => {});
});
