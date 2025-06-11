"use client";

import { AppTable } from "@/components/common";
import { ColumnDef } from "@tanstack/react-table";
import React, { useCallback, useRef } from "react";
import { makeData, Person } from "./makeData";
import { getElementById } from "@/utils/common.utils";
import { useResizeObserver } from "./useResizeObserver";
const trackedElementId = "table";

const DemoPage = () => {
  const resizeElementRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = React.useState<Person[]>([]);

  const handleResize = useCallback(() => {
    const heightWindow = window.innerHeight;
    const tableEl = getElementById(trackedElementId);
    const paginationEl = getElementById("pagination");

    if (tableEl) {
      const headerHeight = tableEl.getBoundingClientRect().top;
      const paginationHeight =
        paginationEl?.getBoundingClientRect().height || 0;

      tableEl.style.height =
        heightWindow - headerHeight - paginationHeight - 1 + "px";
    }
  }, []);

  useResizeObserver(resizeElementRef, handleResize);

  React.useEffect(() => {
    setData(makeData(10000));
  }, []);

  return (
    <>
      <AppTable
        data={data}
        columns={columns}
        totalData={data.length}
        hasDefaultPagination
      />
    </>
  );
};

export default DemoPage;

const columns: ColumnDef<Person>[] = [
  {
    id: "index",
    cell: ({ row }) => row.index + 1,
    size: 50,
    header: "STT",
    meta: {
      align: "center",
    },
  },
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "lastName",
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
  },
  {
    accessorKey: "age",
    header: () => "Age",
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];
