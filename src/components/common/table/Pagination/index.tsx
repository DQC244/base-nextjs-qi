"use client";

import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { forwardRef, memo, useEffect, useState } from "react";
import PageIndex, { PageIndexProps } from "./PageIndex";
import PageSizeOptions, { PageSizeOptionsProps } from "./PageSizeOptions";
import { AppConstant } from "@/constant";
import { formatNumber } from "@/utils/format.utils";

const AppPagination = forwardRef<HTMLDivElement, AppPaginationProps>(
  (
    {
      pageSizeOptionList,
      currentPage,
      pageSize,
      onPageChange,
      totalPage,
      totalData,
      ...otherProps
    },
    ref
  ) => {
    const [page, setPage] = useState({
      pageSize: AppConstant.DEFAULT_PAGINATION.size,
      currentPage: AppConstant.DEFAULT_PAGINATION.page,
    });

    const handlePageChange = (key: PAGE_CHANGE) => (value: string | number) => {
      let newPage = {
        ...page,
        [key]: value,
      };

      if (key === PAGE_CHANGE.pageSize) {
        newPage = {
          ...newPage,
          currentPage: AppConstant.DEFAULT_PAGINATION.page,
        };
      }

      setPage(newPage);
      onPageChange(newPage);
    };

    useEffect(() => {
      if (
        pageSizeOptionList &&
        Array.isArray(pageSizeOptionList) &&
        pageSizeOptionList.length
      ) {
        setPage((prePage) => {
          return {
            ...prePage,
            pageSize: pageSizeOptionList[0],
          };
        });
      }
    }, [pageSizeOptionList]);

    useEffect(() => {
      setPage((prePage) => {
        return {
          ...prePage,
          pageSize: pageSize,
        };
      });
    }, [pageSize]);

    useEffect(() => {
      setPage((prePage) => {
        return {
          ...prePage,
          currentPage: Number(currentPage),
        };
      });
    }, [currentPage]);

    return (
      <Box
        sx={{
          height: 40,
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #F2F3F5",
          borderBottom: "1px solid #F2F3F5",
          justifyContent: "space-between",
          px: 1,
          position: "relative",
          backgroundColor: "common.white",
          gap: 1,
        }}
        {...otherProps}
        ref={ref}
      >
        <Stack direction="row" spacing={1.5}>
          <PageIndex
            onPageIndexChange={handlePageChange(PAGE_CHANGE.currentPage)}
            currentPage={page.currentPage}
            totalPage={totalPage}
          />

          <PageSizeOptions
            pageSize={page.pageSize}
            pageSizeOptionList={pageSizeOptionList}
            onPageSizeChange={handlePageChange(PAGE_CHANGE.pageSize)}
          />
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center">
          <Typography whiteSpace={"nowrap"}>
            Tổng {formatNumber(totalData)} {"bản ghi"}
          </Typography>
        </Stack>
      </Box>
    );
  }
);

enum PAGE_CHANGE {
  pageSize = "pageSize",
  currentPage = "currentPage",
}

export type AppPaginationProps = BoxProps &
  Pick<PageIndexProps, "currentPage" | "totalPage"> &
  Pick<PageSizeOptionsProps, "pageSizeOptionList" | "pageSize"> & {
    totalData: number;
    onPageChange: (page: { pageSize: number; currentPage: number }) => void;
  };
AppPagination.displayName = "AppPagination";

export default memo(AppPagination);
