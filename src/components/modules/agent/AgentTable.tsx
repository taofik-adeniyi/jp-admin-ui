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
import { fuzzyFilter, handleCopy } from "@/lib/utils";
import { FaCopy } from "react-icons/fa";
import moment from "moment";

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
    columnHelper.display({
      header: ()=>"S/N",
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
      cell: ({row}) => {
        const role = row.original
        return (
          <p className=" text-opacity-90">{moment(role.createdAt).format('DD/MM/YYYY LT') }</p>
        )
      },
    }),

    columnHelper.display({
      id: "agent_link",
      footer: (info) => info.column.id,
      header: () => "Agent Link",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <div className="flex items-center space-x-2 text-opacity-90 gap-x-2">
            {`https://jp-customer-ui.vercel.app/play/agent/${role?.agentId || role?.username}`}
            <button
              onClick={() =>
                handleCopy(
                  `https://jp-customer-ui.vercel.app/play/agent/${role?.agentId || role?.username}`
                )
              }
              className="flex items-center space-x-2 gap-x-2"
              type="button"
            >
              <FaCopy />
            </button>
          </div>
        );
      },
    }),

    columnHelper.accessor("agentCode", {
      id: "agentCode",
      footer: (info) => info.column.id,
      header: () => "Agent Code",
      cell: (info) => (
        <p className=" truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.display({
      id: "action",
      header: () => "Actions",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <>
            <Link href={`/agent/${role?.agentId}`}>
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
