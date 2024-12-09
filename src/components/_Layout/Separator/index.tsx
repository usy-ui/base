import { CSSProperties, FC } from "react";

import clsx from "clsx";

import { Typography } from "@src/components/Typography";
import { useUsyColor } from "@src/hooks";
import { usySpacing } from "@src/styles";

import {
  BaseColorUnion,
  CommonCompProps,
  HeightProps,
  MarginProps,
  WidthProps,
} from "../../../@types";
import { PureTypographyProps } from "../../Typography";

type PureSeparatorProps = {
  title?: string;
  titleProps?: Omit<PureTypographyProps, "children">;
  direction?: "horizontal" | "vertical";
  color?: BaseColorUnion | "random";
};

export type SeparatorProps = PureSeparatorProps &
  WidthProps &
  HeightProps &
  MarginProps &
  CommonCompProps;

export const Separator: FC<SeparatorProps> = ({
  title,
  titleProps,
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
  const defaultMarginProps =
    direction === "vertical"
      ? { margin: `0 ${usySpacing.px20}` }
      : { margin: `${usySpacing.px20} 0` };

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
        ...(marginProps || defaultMarginProps),
        ...cssVariables,
      }}
      data-testid={testId}
    >
      {title && (
        <Typography {...titleProps} className="title">
          {title}
        </Typography>
      )}
    </div>
  );
};
