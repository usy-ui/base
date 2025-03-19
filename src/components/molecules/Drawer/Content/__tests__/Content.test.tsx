import React from "react";

import { render, screen } from "@testing-library/react";

import { mockLoremIpsumParagraph } from "@src/mocks/testing";

import { DrawerContent } from "../index";

describe("DrawerContent", () => {
  describe("render", () => {
    it("should render component and children", () => {
      render(
        <DrawerContent testId="lorem-drawer-content">
          {mockLoremIpsumParagraph}
        </DrawerContent>
      );

      expect(screen.getByTestId("lorem-drawer-content")).toBeInTheDocument();
      expect(
        screen.getByText(/Lorem Ipsum is simply dummy text/i)
      ).toBeInTheDocument();
    });
  });
});
