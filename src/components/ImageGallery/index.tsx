"use client";
import { FC } from "react";

import clsx from "clsx";

import { BaseSemanticTagUnion, CommonCompProps } from "../../@types";

type Image = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

export type ImageGalleryProps = {
  tag?: BaseSemanticTagUnion;
  images: Image[];
} & CommonCompProps;

export const ImageGallery: FC<ImageGalleryProps> = ({
  tag: Tag = "div",
  name = "image-gallery",
  images,
  className,
  testId = name,
}) => {
  return (
    <Tag className={clsx("usy-image-gallery", className)} data-testid={testId}>
      {images.map(({ url, shape, alt }) => (
        <div key={url} className={clsx("image-container", shape)}>
          <img src={url} className="image" alt={alt} />
        </div>
      ))}
    </Tag>
  );
};
