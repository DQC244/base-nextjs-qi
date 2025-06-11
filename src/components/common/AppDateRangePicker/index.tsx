"use client";

import { IconButton } from "@mui/material";
import {
  forwardRef,
  memo,
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { CalendarProps, DatePickerProps } from "react-multi-date-picker";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import AppTextField from "../AppTextField";
import OptionsPlugin from "./Plugin/OptionsPlugin";
import ActionPluin from "./Plugin/ActionPlugin";
import { AppConstant } from "@/constant";
import { ArrowIcon, CalendarIcon } from "../../icons";
import { DateRangeValue } from "@/models/types";

type RangeDatePickerProps = CalendarProps<false, true> &
  DatePickerProps<false, true> & {
    label?: string;
    onDateChange: (fromDate: DateRangeValue) => void;
  };

const AppDateRangePicker = forwardRef((props: RangeDatePickerProps, ref) => {
  const { onDateChange, label, value: defaultValue, ...otherProps } = props;

  const [selected, setSelected] = useState<string>("");
  const [value, setValue] = useState<DateObject[]>((defaultValue as any) ?? []);

  const handleApply = useCallback(() => {
    if (value?.length === 0) {
      onDateChange([null, null]);
      return;
    }

    const [from, to] = value;
    if (value.length === 2) {
      onDateChange([from.toDate(), to.toDate()]);
    } else {
      onDateChange([from.toDate(), null]);
    }
  }, [value, onDateChange]);

  useEffect(() => {
    if (defaultValue?.length === 2) {
      setValue(defaultValue as any);
    }
  }, [defaultValue]);

  return (
    <DatePicker
      value={value}
      headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
      className="green"
      ref={ref as MutableRefObject<any>}
      range
      containerStyle={{
        width: "100%",
      }}
      numberOfMonths={2}
      arrow={false}
      dateSeparator=" đến "
      weekDays={weekDays}
      weekStartDayIndex={1}
      months={months}
      format={AppConstant.DATE_FORMAT}
      renderButton={(
        direction: "left" | "right",
        handleClick: () => void,
        disabled: boolean
      ) => (
        <IconButton disabled={disabled} onClick={handleClick}>
          {direction === "right" ? (
            <ArrowIcon
              sx={{
                transform: "rotate(180deg)",
              }}
            />
          ) : (
            <ArrowIcon />
          )}
        </IconButton>
      )}
      maxDate={new DateObject()}
      onChange={(selectedDates: DateObject[]) => {
        setValue(selectedDates);
      }}
      render={(
        value: string,
        openCalendar: () => void,
        handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
      ) => (
        <AppTextField
          sx={{
            "&& .MuiInputBase-root": {
              pr: 0.25,
            },
          }}
          label={label}
          value={value}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;

            handleValueChange(e);

            if (!newValue) {
              setValue([]);
              onDateChange([null, null]);
              setSelected("");
            }
          }}
          onFocus={openCalendar}
          InputProps={{
            endAdornment: (
              <CalendarIcon
                onClick={openCalendar}
                sx={{ cursor: "pointer", fontSize: 36, p: 0.75 }}
              />
            ),
          }}
        />
      )}
      plugins={[
        <ActionPluin
          DatePicker
          onSelectRanger={(range: DateObject[]) => setValue(range)}
          onApply={handleApply}
          key="actions"
          position="bottom"
        />,
        <OptionsPlugin
          selected={selected}
          onSetSelected={(selected: string) => setSelected(selected)}
          DatePicker
          position="left"
          onSelectRanger={(range: DateObject[]) => setValue(range)}
          onDateChange={(date) => onDateChange(date)}
          key={"options"}
        />,
      ]}
      {...otherProps}
    />
  );
});

export default memo(AppDateRangePicker);

const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];
