import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RunningTimerIcon } from "../../Icon";
import { Button } from "../index";

describe("Button component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(<Button testId="click-button">Click</Button>);
      expect(screen.getByTestId("click-button").firstChild).toBeDefined();
    });

    it("should render loading icon", () => {
      render(
        <Button testId="click-button" loading>
          Click
        </Button>
      );
      expect(
        screen.getByTestId("click-button-loading-icon")
      ).toBeInTheDocument();
    });

    it("should render left icon", () => {
      render(
        <Button testId="click-button" iconLeft={<RunningTimerIcon />}>
          Click
        </Button>
      );
      expect(screen.getByTestId("click-button-icon-left")).toBeInTheDocument();
    });

    it("should render right icon", () => {
      render(
        <Button testId="click-button" iconRight={<RunningTimerIcon />}>
          Click
        </Button>
      );
      expect(screen.getByTestId("click-button-icon-right")).toBeInTheDocument();
    });
  });

  describe("action", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const onClick = jest.fn();
    it("should trigger onClick prop when clicking", async () => {
      render(
        <Button testId="click-button" onClick={onClick}>
          Click
        </Button>
      );

      await userEvent.click(screen.getByTestId("click-button"));
      expect(onClick).toHaveBeenCalled();
    });

    it("should not trigger onClick prop when button is disabled or loading", async () => {
      render(
        <Button testId="click-button" onClick={onClick} disabled>
          Click
        </Button>
      );

      await userEvent.click(screen.getByTestId("click-button"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
