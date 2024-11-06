"use client";
import { FC } from "react";

import clsx from "clsx";

import { BaseSemanticTagUnion, CommonCompProps } from "../../@types";

export type ImageGalleryType = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

type PureImageGalleryProps = {
  images: ImageGalleryType[];
  tag?: BaseSemanticTagUnion;
};

export type ImageGalleryProps = PureImageGalleryProps & CommonCompProps;

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  tag: Tag = "div",
  className,
  name = "image-gallery",
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
