import React from "react";
import "../src/styles.scss";

import { Flex } from "../src/components/_Layout/Flex";
import { usySpacing } from "../src/styles";

export const ThemeProviderDecorator = (Story) => {
  return (
    <React.StrictMode>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px32}>
        <Story />
      </Flex>
    </React.StrictMode>
  );
};
