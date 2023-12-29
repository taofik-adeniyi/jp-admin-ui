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
import { TicketType } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import { fuzzyFilter, handleCopy } from "@/lib/utils";
import { FaCopy } from "react-icons/fa";
import moment from "moment";

type Props = {
  data: TicketType[];
  onSelectRole?: (role: any) => void;
};

const AgentTicketTable = ({ data }: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");
  console.log("data:", data);
  const columnHelper = createColumnHelper<TicketType>();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const desktopColumns = [
    columnHelper.display({
      header: () => "S/N",
      size: 10,
      id: "s/n",
      cell: ({ row }: { row: any }) => {
        console.log("row", row);
        return <strong>{parseInt(row.id) + 1}</strong>;
      },
    }),
    columnHelper.accessor("createdAt", {
      id: "createdAt",
      footer: (info) => info.column.id,
      header: () => "Date Created",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <p className=" text-opacity-90">
            {moment(role.createdAt).format("DD/MM/YYY h:mm:ss a")}
          </p>
        );
      },
    }),

    columnHelper.accessor("_id", {
      id: "ticketNumber",
      footer: (info) => info.column.id,
      header: () => "Ticket Number",
      cell: ({ row }) => {
        const { _id } = row.original;
        return <div>{_id}</div>;
      },
    }),
    columnHelper.display({
      id: "action",
      header: () => "Actions",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <>
            <JPButton>View Details</JPButton>
          </>
        );
      },
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

export default AgentTicketTable;
