"use client";

import React, { memo, useState, useCallback, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import PaginationButton from "./PaginationButton";
import { CommonUtils, FormatUtils } from "@/utils";
import { AppConstant } from "@/constant";
import AppIntegerInput from "./IntegerInput";

const PageIndex = ({
  totalPage,
  currentPage,
  onPageIndexChange,
}: PageIndexProps) => {
  const [page, setPage] = useState(currentPage);

  const handlePageIndexChangeDebounce = useCallback(
    CommonUtils.debounce((value) => {
      onPageIndexChange(value);
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND),
    [onPageIndexChange]
  );

  const handlePageChange = (direction: ACTION) => (value: any) => {
    let newValue = Number(value);

    switch (direction) {
      case ACTION.previous:
        if (newValue > MIN_PAGINATION) newValue = newValue - 1;
        break;

      case ACTION.next:
        if (newValue < Number(totalPage)) newValue = newValue + 1;
        break;

      default:
        break;
    }

    setPage(newValue || "");

    if (!newValue || newValue < MIN_PAGINATION || newValue > Number(totalPage))
      return;
    handlePageIndexChangeDebounce(newValue);
  };

  const handleInputBlur = () => {
    if (
      !Number(page) ||
      Number(page) < MIN_PAGINATION ||
      Number(page) > Number(totalPage)
    ) {
      setPage(currentPage);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <Stack spacing={1.5} direction="row" alignItems="center">
      <Stack spacing={1} direction="row">
        <PaginationButton
          onClick={() => handlePageChange(ACTION.previous)(page)}
          disabled={Number(page) === MIN_PAGINATION}
        />
        <AppIntegerInput
          onBlur={handleInputBlur}
          value={page}
          onChange={handlePageChange(ACTION.none)}
          onFocus={(
            e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => e.target.select()}
        />
        <PaginationButton
          onClick={() => handlePageChange(ACTION.next)(page)}
          sx={{ transform: "rotate(180deg)" }}
          disabled={Number(page) === Number(totalPage)}
        />
      </Stack>
      <Typography whiteSpace={"nowrap"}>
        trên {FormatUtils.formatNumber(totalPage, 1)} trang.
      </Typography>
    </Stack>
  );
};

const MIN_PAGINATION = 1;

enum ACTION {
  none,
  previous,
  next,
}

export type PageIndexProps = {
  currentPage: string | number;
  totalPage: number | string;
  onPageIndexChange: (value: number | string) => void;
};

export default memo(PageIndex);
