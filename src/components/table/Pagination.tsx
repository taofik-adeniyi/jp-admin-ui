"use client"
import ResponsivePagination from "react-responsive-pagination";
// import classnames from "classnames";

type PaginationProps = {
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  // eslint-disable-next-line no-unused-vars
  setPageIndex: (index: number) => void;
  // eslint-disable-next-line no-unused-vars
  setPageSize: (size: number) => void;
  //   isMobile: boolean;
};

export const Pagination = ({
    pageCount,
    pageIndex,
    pageSize,
    setPageIndex,
    setPageSize,
}: // isMobile,
PaginationProps) => {
    const linkClassName =
    "hover:bg-primary-500 w-8 h-8 border rounded mt-2 flex items-center justify-center hover:opacity-80 border-primary-500 mx-2";
    return (
        <div className="flex w-full justify-between items-center">
            <ResponsivePagination
                activeItemClassName={`${linkClassName} bg-primary-500`}
                className="flex w-full items-center "
                current={pageIndex}
                disabledItemClassName="opacity-60 hover:opacity-60 cursor-auto"
                onPageChange={(selected) => setPageIndex(selected)}
                pageItemClassName={linkClassName}
                pageLinkClassName=""
                // srOnlyClassName="hidden"
                total={pageCount}
            />

            <div>
                <select
                    className="rounded border p-1"
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                    value={pageSize}
                >
                    {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
              Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
