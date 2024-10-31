"use client";
import { ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps, PaddingProps, WidthProps } from "../../@types";

type FallbackRow = Record<string, any>;

export type TableColumnType<R extends FallbackRow> = {
  key: Extract<keyof R | "select" | "action-1" | "action-2", string>;
  title?: string;
  align?: "left" | "center" | "right";
  renderRow?: (row: R) => ReactNode;
} & WidthProps &
  PaddingProps;

type TableStyles = {
  hideHeader?: boolean;
  hideOuterBorder?: boolean;
};

export type TableProps<R extends FallbackRow> = {
  rowKey: Extract<keyof R, string>;
  columns: TableColumnType<R>[];
  dataRows: R[];
  styles?: TableStyles;
} & CommonCompProps;

export const Table = <R extends FallbackRow>({
  rowKey,
  columns,
  dataRows,
  styles,
  className,
  name = "table",
  testId = name,
}: TableProps<R>) => {
  const { hideHeader = false, hideOuterBorder = false } = styles || {};

  const renderHead = () => {
    if (hideHeader) {
      return null;
    }

    return (
      <thead className="head" data-testid={`${testId}-head`}>
        <tr className="head-row" data-testid={`${testId}-head-row`}>
          {columns.map((col) => (
            <th
              key={col.key}
              className={clsx("head-column", `align-${col.align}`)}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody className="body" data-testid={`${testId}-body`}>
        {dataRows.map((row) => (
          <tr
            key={row[rowKey]}
            className="body-row"
            data-testid={`${testId}-body-row`}
          >
            {columns.map((col) => (
              <td
                key={col.key}
                className={clsx("body-column", `align-${col.align}`)}
                style={{
                  ...col.widthProps,
                  ...col.paddingProps,
                }}
              >
                {col.renderRow ? col.renderRow(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div
      className={clsx("usy-table-container", className)}
      data-testid={testId}
    >
      <div
        className={clsx("table-container", {
          ["has-outer-border"]: !hideOuterBorder,
        })}
      >
        <table className="table">
          {renderHead()}
          {renderBody()}
        </table>
      </div>
    </div>
  );
};
