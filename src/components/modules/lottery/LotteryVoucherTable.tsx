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
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {LotteryVoucherType} from "@/lib/types"
import StatusBadge from "@/components/StatusBadge";
import { getLotteryDrawData } from "@/services/lottery";
type Props = {
  data: LotteryVoucherType[];
  onSelectRole?: (role: any) => void;
};


const LotteryVoucherTable = ({data}: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");


  const columnHelper = createColumnHelper<LotteryVoucherType>();

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
      header: ()=>'Lottery Title',
      cell: (info) => (
        <p className="max-w-[150px] truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("dateGenerated", {
      id: "dateGenerated",
      footer: (info) => info.column.id,
      header: () =>'Date Generated',
      cell: (info) => (
        <p className="capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("quantity", {
      id:"quantity",
      footer: (info) => info.column.id,
      header: () =>'Quantity',
      cell: (info) => (
        <p className="capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.display({
      id: "action",
      header: ()=> 'Actions',
      cell: ({ row }) => {
        const role = row.original;
        return (
          <>
            <Link href={`/lottery/${row?.id}`}>
              <JPButton>Records</JPButton>
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

export default LotteryVoucherTable;
