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
import Link from "next/link";
import JPButton from "@/components/JPButton";
import moment from "moment-timezone";
type Props = {
  data: LotteryDrawTicketType[];
  onSelectRole?: (role: any) => void;
};


const LotteryDrawTicketTable = ({data}: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");
  console.log("weeee",data)


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
        <p className="max-w-[150px] truncate font-medium text-opacity-90">
          {moment(info.getValue()).format("MM/DD/YYYY LT")}
        </p>
      ),
    }),
    columnHelper.display({
      id: "ticketNumber",
      header: () =>'Ticket Number',
      cell: ({row}) => {
        const ticker = row.original
        // const ticketNumber = `${ticker?.agent?.name?.[0]}-${parseInt(row?.id)+1}${ticker._id}`
        const ticketNumber = `${ticker?.ticketNumber || ticker._id}`
        return (
          <p className="capitalize text-opacity-90">
            {ticketNumber}
          </p>
        )
      },
    }),
    columnHelper.accessor("agent", {
      id:"agent",
      footer: (info) => info.column.id,
      header: () =>'Agent Name',
      cell: ({row}) => {
        const agentName = row?.original?.agent?.name
        return (
          <p className="capitalize text-opacity-90">
           {agentName}
          </p>
        )
      },
    }),
    columnHelper.display({
      id: "action",
      cell: ({ row }) => {
        const role = row.original;
        return (
          <>
            {/* <Link href={`/lottery/draw/${role?._id}`}> */}
              <JPButton>View Details</JPButton>
            {/* </Link> */}
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

export default LotteryDrawTicketTable;
