"use client";
import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseTypoTagUnion, CommonCompProps, MarginProps } from "../../@types";
import { Typography, TypographySize } from "../Typography";

type PureParagraphHeadingProps = {
  title: string | ReactNode;
  titleSize?: TypographySize;
  description?: string | ReactNode;
  descriptionSize?: TypographySize;
};

export type ParagraphHeadingProps = PureParagraphHeadingProps &
  MarginProps &
  CommonCompProps;

const MappingHeadingTag: Record<TypographySize, BaseTypoTagUnion> = {
  tiny: "small",
  small: "small",
  medium: "p",
  large: "h3",
  huge: "h4",
  "gigant-2": "h5",
  "gigant-1": "h6",
};

export const ParagraphHeading: FC<ParagraphHeadingProps> = ({
  title,
  description,
  titleSize = "large",
  descriptionSize = "small",
  marginProps,
  name = "paragraph-heading",
  className,
  testId = name,
}) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }

    if (typeof description === "string") {
      return (
        <Typography
          color="dark-1"
          size={descriptionSize}
          className="description"
        >
          {description}
        </Typography>
      );
    }

    return description;
  };

  return (
    <div
      className={clsx(
        "usy-paragraph-heading-container",
        {
          [`mt-${titleSize}`]: Boolean(titleSize),
        },
        className
      )}
      style={{ ...marginProps }}
      data-testid={testId}
    >
      <Typography
        tag={MappingHeadingTag[titleSize]}
        weight="semibold"
        size={titleSize}
      >
        {title}
      </Typography>
      {renderDescription()}
    </div>
  );
};
