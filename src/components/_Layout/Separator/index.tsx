import { CSSProperties, FC } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";
import { usySpacing } from "@src/styles";

import {
  BaseColor,
  CommonCompProps,
  HeightProps,
  MarginProps,
  WidthProps,
} from "../../../@types";

type SeparatorProps = {
  title?: string;
  direction?: "horizontal" | "vertical";
  color?: BaseColor | "random";
} & WidthProps &
  HeightProps &
  MarginProps &
  CommonCompProps;

export const Separator: FC<SeparatorProps> = ({
  title,
  direction = "horizontal",
  color,
  widthProps,
  heightProps,
  marginProps,
  className,
  name = "separator",
  testId = name,
}) => {
  const colorInHex = useUsyColor(color || "light-2");
  const cssVariables = {
    "--usy-separator-color": colorInHex,
  } as CSSProperties;

  return (
    <div
      className={clsx(
        "usy-separator-container",
        `direction-${direction}`,
        className
      )}
      style={{
        ...widthProps,
        ...heightProps,
        ...(marginProps || direction === "vertical"
          ? { margin: `0 ${usySpacing.px20}` }
          : { margin: `${usySpacing.px20} 0` }),
        ...cssVariables,
      }}
      data-testid={testId}
    >
      {title && <span className="title">{title}</span>}
    </div>
  );
};
