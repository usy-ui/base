import React from "react";

import { render, screen } from "@testing-library/react";

import { DrawerContent } from "../index";

describe("DrawerContent component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <DrawerContent testId="drawer-content">Usy UI components</DrawerContent>
      );
      expect(screen.getByTestId("drawer-content").firstChild).toBeDefined();
    });
  });
});
