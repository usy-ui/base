import React from "react";

import { render, screen } from "@testing-library/react";

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from "../index";

describe("Drawer Component", () => {
  describe("render", () => {
    it("should render component", () => {
      const drawerHeader = (
        <DrawerHeader
          title="Drawer"
          onClose={() => alert("close")}
          testId="drawer-header"
        />
      );
      const drawerFooter = (
        <DrawerFooter
          alignContent="center"
          testId="drawer-footer"
          buttons={[
            {
              type: "primary",
              label: "Confirm",
              onClick: () => alert("Confirmed"),
            },
            {
              type: "normal",
              label: "Cancel",
              onClick: () => alert("Canceled"),
            },
          ]}
        />
      );

      render(
        <Drawer
          header={drawerHeader}
          footer={drawerFooter}
          testId="drawer"
          isOpen
        >
          <DrawerContent testId="drawer-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </DrawerContent>
        </Drawer>
      );

      expect(screen.getByTestId("drawer")).toBeInTheDocument();
      expect(screen.getByTestId("drawer-overlay")).toBeInTheDocument();
      expect(screen.getByTestId("drawer-header")).toBeInTheDocument();
      expect(screen.getByTestId("drawer-content")).toBeInTheDocument();
      expect(screen.getByTestId("drawer-footer")).toBeInTheDocument();
    });
  });
});
