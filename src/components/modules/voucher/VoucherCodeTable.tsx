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
import {VoucherCodeType} from "@/lib/types"
import StatusBadge from "@/components/StatusBadge";

type Props = {
  data: VoucherCodeType[];
  onSelectRole?: (role: any) => void;
};


const VoucherCodeTable = ({data}: Props) => {
  const [globalFilter, setGlobalFilter] = useState("");


  const columnHelper = createColumnHelper<VoucherCodeType>();

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
      header: ()=>'Created At',
      size: 20,
      cell: (info) => (
        <p className="max-w-[150px] truncate font-medium capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
        id: "status",
        footer: (info) => info.column.id,
        header: () =>'Status',
        cell: (info) => (
          <button type="button" className={`${info.getValue() == 'PENDING' ? 'bg-blue-500 text-white ': 'bg-green-500 text-white'} p-2 rounded-lg capitalize text-opacity-90`}>
            {info.getValue()}
          </button>
        ),
      }),
    columnHelper.accessor("voucherCode", {
      id: "voucherCode",
      footer: (info) => info.column.id,
      header: () =>'Voucher Code',
      cell: (info) => (
        <p className="capitalize text-opacity-90">
          {info.getValue()}
        </p>
      ),
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

export default VoucherCodeTable;
