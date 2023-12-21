"use client";

import JPButton from "@/components/JPButton";
import { Table } from "@/components/table";
import {
  getCoreRowModel,
  Table as ReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  RowData,
  createColumnHelper,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AgentType } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import { fuzzyFilter } from "@/lib/utils";
type Props = {
  data: AgentType[];
  onSelectRole?: (role: any) => void;
};

const AgentTable = ({ data }: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");
  console.log("data:", data);
  const columnHelper = createColumnHelper<AgentType>();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const desktopColumns = [
    columnHelper.accessor("agentCode", {
      id: "agentCode",
      footer: (info) => info.column.id,
      header: () => "Agent Code",
      cell: (info) => (
        <p className="max-w-[150px] truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("name", {
      id: "plan",
      footer: (info) => info.column.id,
      header: () => "Plan",
      cell: (info) => (
        <p className="capitalize text-opacity-90">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      footer: (info) => info.column.id,
      header: () => "Status",
      cell: ({ row }) => {
        const { status } = row.original;
        return <StatusBadge status={'in active'} />;
      },
    }),

    columnHelper.display({
      id: "action",
      header: () => "Actions",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <>
            <Link href={`/lottery/${row?.id}`}>
              <JPButton>Details</JPButton>
            </Link>
          </>
        );
      },
      // size: 20,
    }),
  ];

  const table = useReactTable({
    columns: desktopColumns,
    data: data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    // onSortingChange: setSorting,
    state: {
      // sorting,
      globalFilter,
    },
  }) as ReactTable<RowData>;

  return (
    <>
      <div className="bg-white w-full">
        <Table table={table} isMobile={isMobile} />
      </div>
    </>
  );
};

export default AgentTable;
