"use client";

import JPButton from "@/components/JPButton";
import { Table } from "@/components/table";
import { formatDate, formatDateTime, fuzzyFilter } from "@/lib/utils";
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
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {LotteryType} from "@/lib/types"
import StatusBadge from "@/components/StatusBadge";
import moment from "moment-timezone";
type Props = {
  data: LotteryType[];
  onSelectRole?: (role: any) => void;
};


const LotteryTable = ({data}: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");
console.log("data>>>>",data)
  const columnHelper = createColumnHelper<LotteryType>();

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
    columnHelper.accessor("title", {
      id: "title",
      footer: (info) => info.column.id,
      header: ()=>'Title',
      cell: (info) => (
        <p className="truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("createdAt", {
      id:"createdAt",
      footer: (info) => info.column.id,
      header: () =>'Date Created',
      cell: (info) => (
        <p className="text-opacity-90">
          {moment(info.getValue()).format("DD/MM/YYYY, LT")}
        </p>
      ),
    }),
    columnHelper.display({
      id: "action",
      header: () =>'Actions',
      cell: ({ row }) => {
        const { _id } = row.original;
        return (
          <>
            <Link href={`/lottery/${_id}`}>
              <JPButton>View Lottery</JPButton>
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

export default LotteryTable;
