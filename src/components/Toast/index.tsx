"use client";
import {
  CSSProperties,
  FC,
  FunctionComponent,
  ReactNode,
  createRef,
  useEffect,
} from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";

import { useMounted } from "@src/hooks";
import { usyColor } from "@src/styles";
import { getUniqueTime } from "@src/utils";

import { BasePositionExtraUnion, CommonCompProps } from "../../@types";
import {
  CheckCircleIcon,
  CloseIcon,
  InfoCircleIcon,
  ExclamationCircleIcon,
  BanIcon,
} from "../Icon";
import { Typography } from "../Typography";

type ToastType = "success" | "info" | "warning" | "error" | "basic";
type PushToastParams = {
  type: ToastType;
  statusIcon?: FunctionComponent<{ className: string; color?: string }>;
  title?: string | ReactNode;
  content: string | ReactNode;
  timeout?: number;
  styles?: CSSProperties;
  onClose?: () => void;
};
type ToastParams = Omit<PushToastParams, "type">;

/**
 * Toast Instance
 */

interface ToastInstance {
  basic: (params: ToastParams) => void;
  success: (params: ToastParams) => void;
  info: (params: ToastParams) => void;
  warning: (params: ToastParams) => void;
  error: (params: ToastParams) => void;
}

export let rootToast: ToastInstance;

/**
 * Toast Component
 */

type ToastProps = {
  position?: BasePositionExtraUnion;
  containerElement?: HTMLElement;
  children?: (props: { selfToast: ToastInstance }) => ReactNode;
} & CommonCompProps;

export const Toast: FC<ToastProps> = ({
  position = "top-end",
  containerElement,
  children,
  className,
  testId,
}) => {
  const toastList: Record<string, number | undefined> = {};
  const toastListContainerRef = createRef<HTMLDivElement>();
  const { isMounted } = useMounted();

  useEffect(() => {
    if (!rootToast && !children && isMounted) {
      rootToast = {
        basic,
        success,
        info,
        warning,
        error,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  /**
   * Notify functions
   */

  const normalizeParams = (params: ToastParams): ToastParams => {
    return {
      ...params,
      timeout: params.timeout || 5000,
    };
  };

  const basic = (params: ToastParams) => {
    pushToast({
      ...normalizeParams(params),
      statusIcon: params.statusIcon,
      type: "basic",
    });
  };

  const success = (params: ToastParams) => {
    pushToast({
      ...normalizeParams(params),
      statusIcon: params.statusIcon || CheckCircleIcon,
      type: "success",
    });
  };

  const info = (params: ToastParams) => {
    pushToast({
      ...normalizeParams(params),
      statusIcon: params.statusIcon || InfoCircleIcon,
      type: "info",
    });
  };

  const warning = (params: ToastParams) => {
    pushToast({
      ...normalizeParams(params),
      statusIcon: params.statusIcon || ExclamationCircleIcon,
      type: "warning",
    });
  };

  const error = (params: ToastParams) => {
    pushToast({
      ...normalizeParams(params),
      statusIcon: params.statusIcon || BanIcon,
      type: "error",
    });
  };

  /**
   * Render
   */

  const pushToast = ({
    type,
    title,
    content,
    statusIcon: StatusIcon,
    timeout = 5000,
    styles,
    onClose,
  }: PushToastParams) => {
    const toastId = `toast-${getUniqueTime()}`;
    const toastContainer = document.createElement("div");
    const styleSheet =
      document.styleSheets[0] || document.createElement("style").sheet;

    toastContainer.id = toastId;
    toastContainer.className = `toast-container ${type}`;
    toastContainer.setAttribute("data-testid", testId || `toast-${type}`);
    Object.assign(toastContainer.style, styles);
    styleSheet.insertRule(
      `
      #${toastId}.toast-container::before {
        animation-duration: ${timeout / 1000}s;
      }
    `,
      styleSheet.cssRules.length
    );

    const statusIconElement = StatusIcon ? (
      <StatusIcon
        className="status-icon"
        color={type === "basic" ? "dark-6" : "white"}
      />
    ) : null;
    const titleElement =
      typeof title === "string" ? (
        <Typography
          tag="h4"
          weight="semibold"
          color={type === "basic" ? "dark-9" : "white"}
        >
          {title}
        </Typography>
      ) : (
        title
      );
    const contentElement =
      typeof content === "string" ? (
        <Typography
          tag="small"
          size="small"
          color={type === "basic" ? "dark-9" : "white"}
        >
          {content}
        </Typography>
      ) : (
        content
      );

    toastContainer.innerHTML = renderToStaticMarkup(
      <>
        {statusIconElement}
        <div className="content">
          {titleElement}
          {contentElement}
        </div>
        <CloseIcon
          className="close-icon"
          color={type === "basic" ? usyColor.light6 : usyColor.light3}
        />
      </>
    );
    toastListContainerRef.current?.appendChild(toastContainer);

    const closeToast = () => {
      clearTimeout(toastList[toastId]);
      toastList[toastId] = undefined;
      toastContainer.remove();
      onClose?.();
    };
    const closeIcon = toastContainer.getElementsByClassName(
      "close-icon"
    )[0] as HTMLElement;

    closeIcon.onclick = closeToast;
    toastList[toastId] = setTimeout(closeToast, timeout);
  };

  const renderToastListContainer = () => {
    return (
      <div
        ref={toastListContainerRef}
        className={clsx(
          "usy-toast-container",
          `position-${position}`,
          className
        )}
      />
    );
  };

  return isMounted ? (
    <>
      {createPortal(
        renderToastListContainer(),
        containerElement || document.body
      )}
      {children?.({
        selfToast: {
          basic,
          success,
          info,
          warning,
          error,
        },
      })}
    </>
  ) : null;
};
