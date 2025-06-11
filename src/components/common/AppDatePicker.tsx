"use client";

import React, { forwardRef, memo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/vi";
import AppTextField from "./AppTextField";
import dayjs from "dayjs";
import { CalendarIcon } from "../icons";

const AppDatePicker = forwardRef<HTMLInputElement, DatePickerProps<any>>(
  (props: DatePickerProps<any>, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"vi"}>
        <DatePicker
          inputRef={ref}
          slots={{
            textField: AppTextField,
            openPickerIcon: CalendarIcon,
          }}
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
          {...props}
          value={props.value ? dayjs(props.value) : null}
        />
      </LocalizationProvider>
    );
  }
);

AppDatePicker.displayName = "AppDatePicker";

export default memo(AppDatePicker);
