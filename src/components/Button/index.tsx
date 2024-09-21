"use client";
import { CSSProperties, ReactNode, forwardRef } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { BaseRadius, BaseSize, CommonCompProps } from "../../@types";
import SvgLoadingCircle from "../Icon/LoadingCircle";

export type ButtonType = "button" | "submit";
export type ButtonVariant =
  | "primary"
  | "outline"
  | "normal"
  | "danger"
  | "invisible";
export type ButtonSize = BaseSize | "tiny";

export type ButtonProps = {
  type?: ButtonType;
  width?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: BaseRadius;

  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  noSole?: boolean;
  children: ReactNode;
  onClick?: () => void;
} & CommonCompProps;

const SoleSizeMappingConst: Record<ButtonSize, string> = {
  tiny: "2px",
  small: "3px",
  medium: "4px",
  large: "4px",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      name = "button",
      type = "button",
      width = "unset",
      variant = "normal",
      size = "medium",
      radius = "small",
      loading: isLoading = false,
      disabled: isDisabled = false,
      noSole = false,
      iconLeft,
      iconRight,
      children,
      onClick,
      className,
      testId = name,
    },
    ref
  ) {
    const cssVariables = {
      "--usy-button-sole-height": SoleSizeMappingConst[size],
    } as CSSProperties;

    const handleClick = () => {
      if (isDisabled || isLoading || typeof onClick !== "function") {
        return;
      }

      onClick();
    };

    /**
     * Render
     */

    const renderIconLeft = () =>
      iconLeft && (
        <span className="left-icon" data-testid={`${testId}-icon-left`}>
          {iconLeft}
        </span>
      );

    const renderIconRight = () =>
      iconRight && (
        <span className="right-icon" data-testid={`${testId}-icon-right`}>
          {iconRight}
        </span>
      );

    const renderLoading = () =>
      isLoading && (
        <SvgLoadingCircle
          width={usySpacing.px28}
          height={usySpacing.px28}
          className="loading-icon"
          data-testid={`${testId}-loading-icon`}
        />
      );

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "usy-button-container",
          {
            [`size-${size}`]: Boolean(size),
            [`variant-${variant}`]: Boolean(variant),
            [`radius-${radius}`]: Boolean(radius),
            "no-sole": Boolean(noSole),
            disabled: Boolean(isDisabled),
            loading: Boolean(isLoading),
          },
          className
        )}
        style={{ width, ...cssVariables }}
        disabled={isDisabled}
        onClick={handleClick}
        data-testid={testId}
      >
        {renderIconLeft()}
        {renderLoading()}
        {children}
        {renderIconRight()}
      </button>
    );
  }
);
