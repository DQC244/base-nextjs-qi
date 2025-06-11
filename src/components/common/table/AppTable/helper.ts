import { IPaginationModel } from "@/models/response.model";
import { Column, Row } from "@tanstack/react-table";
import { CSSProperties } from "react";

export const PINNING_CELL = ["index", "edit", "delete", "view"];
export const FIXED_CELL = ["select"];

export const getCommonPinningStyles = <T>(column: Column<T>): CSSProperties => {
  const isPinned = column?.getIsPinned();

  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  const result: CSSProperties = {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    position: isPinned ? "sticky" : "relative",
    minWidth: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };

  if (isFirstRightPinnedColumn) {
    result.borderLeft = "0.5px solid #D9D9D9";
  }

  if ([...PINNING_CELL, ...FIXED_CELL].includes(column.id)) {
    result.maxWidth = 50;
    result.width = 50;
  } else if (column.id === "copy") {
    result.maxWidth = 90;
    result.width = 90;
  }

  return result;
};

export const getMergeHeaderGroups = (tableHeaderGroups: any) => {
  const headerGroups = tableHeaderGroups;
  const headerIds = new Set();
  const resultHeaderGroups: any[] = [];

  if (headerGroups.length === 1) return [tableHeaderGroups[0].headers];

  for (let i = 0; i < headerGroups.length; i++) {
    const headerGroup =
      i === 0 ? headerGroups[i].headers : resultHeaderGroups[i];

    const preHeaders = headerGroup.map((header: any) =>
      header.isPlaceholder
        ? {
            ...header,
            isPlaceholder: false,
            rowSpan: tableHeaderGroups.length - i,
          }
        : { ...header, rowSpan: 1 }
    );
    resultHeaderGroups.pop();
    resultHeaderGroups.push(preHeaders);
    preHeaders.forEach((preHeader: any) => headerIds.add(preHeader.column.id));

    const targetHeaders = headerGroups[i + 1].headers;
    const newHeaders = targetHeaders.filter(
      (header: any) => !headerIds.has(header.column.id)
    );
    resultHeaderGroups.push(newHeaders);

    if (i === headerGroups.length - 2) {
      break;
    }
  }
  return resultHeaderGroups;
};

export const getPaginationInfo = (
  pagination: IPaginationModel,
  totalData: number
) => {
  const currentPage =
    Math.ceil(pagination.take + pagination.skip) / pagination.take;

  const totalPage = Math.ceil(totalData / pagination.take) || 1;

  return {
    currentPage,
    pageSize: pagination.take,
    totalPage,
  };
};
