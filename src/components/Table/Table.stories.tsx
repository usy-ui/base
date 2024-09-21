import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { usySpacing } from "../../styles";
import { Box } from "../_Layout/Box";
import { Flex } from "../_Layout/Flex";
import { Button } from "../Button";

import { Table, TableColumnType } from "./index";

const meta: Meta<typeof Table> = {
  component: Table,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

type RowType = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
};

const columns: TableColumnType<RowType>[] = [
  {
    key: "id",
    title: "Id",
  },
  {
    key: "name",
    title: "Name",
    renderRow: (row) => {
      return `${row.name.firstName} ${row.name.lastName}`;
    },
  },
  {
    key: "age",
    title: "Age",
  },
  {
    key: "action",
    title: "",
    widthProps: {
      width: "160px",
    },
    renderRow: () => (
      <Flex gap={usySpacing.px12}>
        <Button variant="filled" size="small" noSole>
          Update
        </Button>
        <Button variant="outline" size="small" noSole>
          Delete
        </Button>
      </Flex>
    ),
  },
];

const rows: RowType[] = [
  {
    id: "1",
    name: {
      firstName: "John",
      lastName: "AA",
    },
    age: 28,
  },
  {
    id: "2",
    name: {
      firstName: "Ben",
      lastName: "BB",
    },
    age: 12,
  },
  {
    id: "3",
    name: {
      firstName: "Jessie",
      lastName: "CC",
    },
    age: 24,
  },
  {
    id: "4",
    name: {
      firstName: "Poly",
      lastName: "DD",
    },
    age: 23,
  },
];

export const Types: Story = {
  render: () => {
    return (
      <Box widthProps={{ minWidth: "600px" }}>
        <Table<RowType> rowKey="id" columns={columns} dataRows={rows} />
      </Box>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Table>;
