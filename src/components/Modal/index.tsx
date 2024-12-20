"use client";
import { FC, ReactNode, useCallback, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted, useOutsideClick } from "@src/hooks";
import { usySpacing, usyZIndex } from "@src/styles";

import { CommonCompProps, WidthProps } from "../../@types";
import { CloseIcon } from "../Icon";
import { ParagraphHeading } from "../ParagraphHeading";

type PureModalProps = {
  children: ReactNode;
  title?: string | ReactNode;
  preventOutsideClose?: boolean;
  containerElement?: HTMLElement;
  zIndex?: number;
  onClose?: () => void;
};

export type ModalProps = PureModalProps & WidthProps & CommonCompProps;

export const Modal: FC<ModalProps> = ({
  children,
  title,
  widthProps,
  preventOutsideClose = false,
  containerElement,
  zIndex = usyZIndex.medium,
  onClose,
  className,
  name = "modal",
  testId = name,
}) => {
  const { isMounted } = useMounted();
  const handleOutsideClick = () => {
    onClose?.();
  };

  const { elementRef } = useOutsideClick(
    handleOutsideClick,
    preventOutsideClose
  );

  const enableScroll = useCallback(() => {
    document.body.style.overflow = "auto";
  }, []);

  const disableScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Render
   */

  const renderModal = () => {
    const renderCloseIcon = () => {
      if (typeof onClose !== "function") {
        return null;
      }

      return (
        <CloseIcon
          className="header-close"
          onClick={onClose}
          data-testid={`${testId}-header-close`}
        />
      );
    };

    const renderTitle = () => {
      if (typeof title === "string") {
        return (
          <ParagraphHeading
            title={title}
            marginProps={{ marginBottom: usySpacing.px20 }}
          />
        );
      }

      return title;
    };

    return (
      <div className={clsx("usy-modal-overlay")} style={{ zIndex }}>
        <div
          ref={elementRef}
          className={clsx("usy-modal-container", className)}
          style={{ ...(widthProps || { minWidth: "500px" }) }}
          data-testid={testId}
        >
          {renderCloseIcon()}
          {renderTitle()}
          {children}
        </div>
      </div>
    );
  };

  return isMounted
    ? createPortal(renderModal(), containerElement || document.body)
    : null;
};
