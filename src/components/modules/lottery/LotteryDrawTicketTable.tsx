"use client";

import { Table } from "@/components/table";
import { fuzzyFilter } from "@/lib/utils";
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
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {LotteryDrawTicketType} from "@/lib/types"
type Props = {
  data: LotteryDrawTicketType[];
  onSelectRole?: (role: any) => void;
};


const LotteryDrawTicketTable = ({data}: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");


  const columnHelper = createColumnHelper<LotteryDrawTicketType>();

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
      header: ()=>'Date Played',
      cell: (info) => (
        <p className="max-w-[150px] truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("ticketNumber", {
      id: "ticketNumber",
      footer: (info) => info.column.id,
      header: () =>'Ticket Number',
      cell: (info) => (
        <p className="capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("channel", {
      id:"channel",
      footer: (info) => info.column.id,
      header: () =>'Channel',
      cell: (info) => (
        <p className="capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("phoneNumber", {
      id: "phoneNumber",
      footer: (info) => info.column.id,
      header: () =>'No of Players',
      cell: ({row}) => {
        const { phoneNumber } = row.original
        return <p className="capitalize text-opacity-90">{phoneNumber}</p>
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

export default LotteryDrawTicketTable;
