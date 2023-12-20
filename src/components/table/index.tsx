import {
    flexRender,
    RowData,
    Table as ReactTable,
    Row,
} from "@tanstack/react-table";
import classnames from "classnames";

import SimpleBar from "simplebar-react";

type TableProps<T extends RowData> = {
  table: ReactTable<T>;
  isMobile: boolean;
  onRowClick?: (row: Row<any>) => void;
};

export const Table = <T extends RowData>({
    table,
    isMobile,
    onRowClick
}: TableProps<T>) => {
    return (
        <div className={classnames("relative w-full  rounded-b border-0", {})}>
            <SimpleBar
                forceVisible="x"
                className="w-full"
                style={{ overflowX: "scroll" }}
            >
                <table className="w-full">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr
                                className={classnames(" rounded text-black border-b", {})}
                                key={headerGroup.id}
                            >
                                {headerGroup.headers.map((header) => (
                                    <th
                                        className="relative py-3 text-base whitespace-nowrap pl-2.5 text-left font-medium capitalize"
                                        colSpan={header.colSpan}
                                        key={header.id}
                                        style={{
                                            width: header.getSize(),
                                        }}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={classnames("flex items-center", {
                                                    "cursor-pointer select-none":
                            header.column.getCanSort(),
                                                })}
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table?.getFilteredRowModel().rows.map((row) => (
                            <tr
                                className={classnames(
                                    "first-letter border-b border-zinc-100",
                                    {
                                        "hover:bg-gray-50": !isMobile,
                                    },
                                    {
                                        "hover:bg-gray-50 hover:cursor-pointer": onRowClick,
                                    }
                                )}
                                key={row.id}
                                onClick={() => onRowClick? onRowClick(row) : {}}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className={classnames("", {
                                            // block: false,
                                        })}
                                        key={cell.id}
                                    >
                                        <div
                                            className={classnames("", {
                                                "w-max p-4 pl-0 text-gray-500 text-sm": true,
                                            })}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SimpleBar>
        </div>
    );
};
