"use client";

import {
  Box,
  BoxProps,
  IconButton,
  Paper,
  PaperProps,
  Stack,
  Table,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableProps,
} from "@mui/material";
import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  OnChangeFn,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  TableOptions,
  VisibilityState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import FooterTable from "./FooterTable";
import HeaderTable from "./HeaderTable";
import RowNoData from "./RowNoData";
import RowTable from "./RowTable";
import { AppConstant, ImageConstant } from "@/constant";
import { getMergeHeaderGroups, getPaginationInfo } from "./helper";
import AppTableBody from "../AppTableBody";
import Pagination from "../Pagination";
import { IPaginationModel } from "@/models/response.model";
import { ArrowIcon } from "@/components/icons";

function AppTable<T extends { id: string | number }>({
  columns,
  data,
  paginationData,
  totalData,
  onPageChange,
  sx,
  isFetching,
  options,
  configColumnLength,
  columnVisibility,
  onColumnVisibilityChange,
  onRowSelectionChange,
  hasDefaultPagination,
  hasFooter = false,
  columnPinning = {
    right: [],
    left: [
      "index",
      "expanded",
      "select",
      "checkbox",
      "edit",
      "delete",
      "view",
      "copy",
    ],
  },
  paginationId,
  tableProps,
  boxProps,
  tableContainerProps,
  ...otherProps
}: AppTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: paginationData?.take ?? AppConstant.DEFAULT_PAGINATION.size, //default page size
  });
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const paginationInfo = useMemo(() => {
    if (!paginationData) {
      return {
        currentPage: AppConstant.DEFAULT_PAGINATION.page,
        pageSize: AppConstant.DEFAULT_PAGINATION.size,
        totalPage: 1,
      };
    }
    return getPaginationInfo(paginationData, totalData);
  }, [paginationData, totalData]);

  const state = useMemo(() => {
    if (hasDefaultPagination) {
      return {
        pagination: hasDefaultPagination ? pagination : undefined,
      };
    } else return {};
  }, [hasDefaultPagination, pagination]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    onColumnVisibilityChange: onColumnVisibilityChange,
    getPaginationRowModel: hasDefaultPagination
      ? getPaginationRowModel()
      : undefined,
    onPaginationChange: hasDefaultPagination ? setPagination : undefined,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    enableRowSelection: true,
    getRowId: (row) => row.id as string,
    ...options,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      columnPinning,
      columnVisibility,
      expanded,
      ...state,
      ...options?.state,
    },
  });

  const { pageSize, pageIndex } = table.getState().pagination || {};

  const handleInputChange = useCallback(
    (newValue: any) => {
      const skip = (newValue.currentPage - 1) * newValue.pageSize;

      if (hasDefaultPagination) {
        table.setPageIndex(newValue.currentPage - 1);
        table.setPageSize(Number(newValue.pageSize));
      } else {
        onPageChange?.({
          skip: skip,
          take: Number(newValue.pageSize),
        });
      }
    },
    [onPageChange, hasDefaultPagination, table]
  );

  const mergeHeaderGroup = getMergeHeaderGroups(table.getHeaderGroups());

  useEffect(() => {
    const selectedRows = data.filter(
      (row: any) => rowSelection[row.id as keyof typeof rowSelection]
    );
    onRowSelectionChange?.(selectedRows as T[]);
  }, [rowSelection, data, onRowSelectionChange]);

  return (
    <Box {...boxProps}>
      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius: "unset",
          borderTopRightRadius: "unset",
          width: "100%",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 10%)",
          ...sx,
        }}
        {...otherProps}
      >
        <TableContainer
          id="table"
          className="custom-scrollbar"
          {...tableContainerProps}
        >
          <Table
            {...tableProps}
            stickyHeader
            aria-label="sticky table"
            sx={{
              width: table.getTotalSize(),
              minWidth: "100%",
              ...tableProps?.sx,
            }}
          >
            <TableHead
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 2,
              }}
            >
              {mergeHeaderGroup.map((headerGroup, index) => {
                return <HeaderTable headerGroup={headerGroup} key={index} />;
              })}
            </TableHead>
            <AppTableBody
              sx={
                isFetching
                  ? {
                      "&:after": {
                        content: `""`,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 10,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "60px 60px",
                        backgroundImage: `url(${ImageConstant.LoadingGif})`,
                      },
                    }
                  : {}
              }
            >
              {renderRows(
                table.getRowModel().rows,
                configColumnLength || columns.length + 1
              )}
            </AppTableBody>
            <FooterTable table={table} hasFooter={hasFooter} />
          </Table>
        </TableContainer>
      </Paper>
      {(Boolean(paginationData) || hasDefaultPagination) && (
        <Pagination
          totalData={
            hasDefaultPagination
              ? table.getFilteredRowModel().rows.length
              : totalData || 0
          }
          id={paginationId || "pagination"}
          currentPage={
            hasDefaultPagination ? pageIndex + 1 : paginationInfo?.currentPage
          }
          pageSize={hasDefaultPagination ? pageSize : paginationInfo.pageSize}
          totalPage={
            hasDefaultPagination
              ? table.getPageCount()
              : paginationInfo.totalPage
          }
          onPageChange={handleInputChange}
        />
      )}
    </Box>
  );
}

export type AppTableProps<T> = PaperProps & {
  columns: ColumnDef<T, any>[];
  data: Array<T>;
  paginationData?: IPaginationModel;
  totalData: number;
  isFetching?: boolean;
  options?: Omit<TableOptions<T>, "data" | "columns" | "getCoreRowModel">;
  configColumnLength?: number;
  hasFooter?: boolean;
  hasDefaultPagination?: boolean;
  columnPinning?: {
    left: string[];
    right: string[];
  };
  paginationId?: string;
  tableContainerProps?: TableContainerProps;
  tableProps?: TableProps;
  boxProps?: BoxProps;
  onPageChange?: (page: { skip: number; take: number }) => void;
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState> | undefined;
  onRowSelectionChange?: ((selectedRows: T[]) => void) | undefined;
};

export default memo(AppTable) as <T>(
  props: AppTableProps<T>
) => React.ReactNode;

const renderRows = (rows: Row<any>[], colSpan: number): any => {
  rows.map((row: any, i: number, rows) => {
    const topRow: any = rows[i - 1];

    for (let j = 0; j < row.getVisibleCells().length; j++) {
      const cell = row.getVisibleCells()[j];

      if (
        !cell.column.columnDef.meta?.enableRowSpan ||
        !topRow ||
        topRow?.getIsGrouped() ||
        row?.getIsGrouped()
      ) {
        cell.rowSpan = 1;
        cell.isRowSpanned = false;
        continue;
      }

      const getMergeTopCell = (ri: number, ci: number): any => {
        const cell: any = (rows[ri] as any).getVisibleCells()[ci];

        const topRow: any = rows[ri - 1];
        const topCell: any = topRow?.getVisibleCells()[ci];

        if (
          !topRow ||
          topRow.getIsGrouped() ||
          JSON.stringify(topCell.getValue()) !== JSON.stringify(cell.getValue())
        ) {
          return cell;
        } else {
          return getMergeTopCell(ri - 1, ci);
        }
      };

      const topCell = topRow.getVisibleCells()[j];

      if (
        JSON.stringify(topCell.getValue()) === JSON.stringify(cell.getValue())
      ) {
        getMergeTopCell(i, j).rowSpan += 1;
        cell.isRowSpanned = true;
      } else {
        cell.rowSpan = 1;
        cell.isRowSpanned = false;
      }
    }

    return null;
  });

  return rows.length ? (
    rows.map((item) => (
      <RowTable
        key={item.id}
        row={item.getVisibleCells()}
        isSelected={item.getIsSelected()}
        isExpanded={item.getIsExpanded()}
        canSelect={item.getCanSelect()}
        isSomeSelected={item.getIsSomeSelected()}
        isGrouped={item.getIsGrouped()}
        canExpand={item.getCanExpand()}
      />
    ))
  ) : (
    <RowNoData colSpan={colSpan} />
  );
};

const createDivs = (count: number) => {
  // Tạo mảng các thẻ div

  return Array.from({ length: count }, (_, index) => {
    const isLast = index + 1 === count;
    return (
      <div
        key={index}
        style={{
          position: "relative",
          minWidth: 24, // Chiều rộng của hình chữ nhật
          height: "100%", // Chiều cao của hình chữ nhật
          backgroundColor: "transparent", // Không có màu nền
          flex: isLast ? 1 : 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "1px", // Độ dày của đường line dọc
            height: "100%", // Chiều dài đường line đến trung điểm chiều dọc
            top: "0", // Bắt đầu từ cạnh trên
            left: "0", // Bắt đầu từ cạnh trái
            backgroundColor: "#CDD8E4", // Màu đường line
          }}
        />
        {isLast && (
          <Box
            sx={{
              position: "absolute",
              width: "100%", // Chiều dài của đường line ngang song song với cạnh ngang
              height: "1px", // Độ dày của đường line ngang
              top: "50%", // Đến trung điểm của chiều dọc
              left: "0", // Căn theo cạnh trái
              backgroundColor: "#CDD8E4", // Màu đường line
            }}
          />
        )}
      </div>
    );
  });
};

export const ExpandedCell = ({ row }: any) => {
  const depth = row.depth;
  return (
    <Stack width="100%">
      <Stack
        direction="row"
        alignItems="center"
        paddingLeft={`${depth * 24}px`}
      >
        {row.getCanExpand() ? (
          <IconButton
            sx={{
              "&,&:hover": {
                p: 0,
                width: 32.5,
                height: 32.5,
                borderRadius: "2px",
                fontWeight: 500,
              },
            }}
            onClick={row.getToggleExpandedHandler()}
          >
            <ArrowIcon
              sx={{
                backgroundColor: "common.white",
                width: 16,
                height: 16,
                border: "1px solid",
                transform: row.getIsExpanded()
                  ? "rotate(90deg)"
                  : "rotate(-90deg)",
                fontSize: 16,
              }}
            />
          </IconButton>
        ) : (
          <div
            style={{
              width: 36,
            }}
          />
        )}
        <Stack
          direction="row"
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 24,
            width: "calc(100% - 26px)",
            zIndex: -1,
          }}
        >
          {createDivs(depth + 1)}
        </Stack>
      </Stack>
    </Stack>
  );
};

export const ExpandedHeaderCell = ({ table }: any) => {
  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        sx={{
          color: "common.white",
          fontWeight: 500,
        }}
        onClick={table.getToggleAllRowsExpandedHandler()}
      >
        <ArrowIcon
          sx={{
            transform: table.getIsAllRowsExpanded()
              ? "rotate(90deg)"
              : "rotate(-90deg)",
            fontSize: 24,
          }}
        />
      </IconButton>
    </Stack>
  );
};
