import React from "react";

import { render, screen } from "@testing-library/react";

import { Typography } from "../index";

describe("Typography component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(<Typography testId="description">A sunny day</Typography>);
      expect(screen.getByTestId("description").firstChild).toBeDefined();
    });
  });
});
