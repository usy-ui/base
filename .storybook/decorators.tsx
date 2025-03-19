import React from "react";
import "../src/styles.scss";

import { usySpacing } from "../src/design-tokens";
import { Flex } from "@src/components";

export const ThemeProviderDecorator = (Story) => {
  return (
    <React.StrictMode>
      <Flex justifyContent="center" alignItems="center" gap={usySpacing.px32}>
        <Story />
      </Flex>
    </React.StrictMode>
  );
};
