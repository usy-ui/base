"use client";
import { CSSProperties, FC, useRef, useState } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import {
  BaseColorUnion,
  CommonCompProps,
  MarginProps,
  WidthProps,
} from "../../@types";
import { CheckIcon, CopyIcon } from "../Icon";

type CopyableProps = {
  text: string;
  color?: BaseColorUnion;
} & WidthProps &
  MarginProps &
  CommonCompProps;

export const Copyable: FC<CopyableProps> = ({
  name = "copyable",
  text,
  color = "primary-dark",
  widthProps,
  marginProps,
  className,
  testId = name,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number>();
  const colorInHex = useUsyColor(color);
  const cssVariables = {
    "--usy-copyable-color": colorInHex,
  } as CSSProperties;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div
      className={clsx("usy-copyable-container", className)}
      style={{
        ...cssVariables,
        ...widthProps,
        ...marginProps,
      }}
      data-testid={testId}
    >
      <pre className="text">{text}</pre>
      <button onClick={handleCopy} className="status-icon">
        {isCopied ? (
          <CheckIcon className="copied-icon" />
        ) : (
          <CopyIcon className="copy-icon" />
        )}
      </button>
    </div>
  );
};
