import React from "react";
import "../src/styles.scss";

import { Flex } from "../src/components/_Layout/Flex";
import { usySpacing } from "../src/styles";

export const ThemeProviderDecorator = (Story) => {
  return (
    <React.StrictMode>
      <Flex
        widthProps={{ minWidth: "500px" }}
        heightProps={{ minHeight: "300px" }}
        justifyContent="center"
        alignItems="flex-start"
        gap={usySpacing.px20}
      >
        <Story />
      </Flex>
    </React.StrictMode>
  );
};
