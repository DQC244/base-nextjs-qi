import React, { memo } from "react";
import { InputLabel, InputLabelProps, Stack, StackProps } from "@mui/material";
import {
  Control,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { DatePickerProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import AppTextField from "../AppTextField";
import AppDatePicker from "../AppDatePicker";

const AppFormDatePicker = <T extends FieldValues>({
  label,
  control,
  name,
  rules,
  controlProps,
  labelProps,
  datePickerProps,
  onChangeValueForm,
  ...otherProps
}: AppFormDatePickerProps<T>) => {
  return (
    <Stack {...otherProps}>
      {Boolean(label) && (
        <InputLabel
          sx={{
            "&": {
              mb: 0.5,
            },
          }}
          required={Boolean(rules?.required)}
          {...labelProps}
        >
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <AppDatePicker
            {...field}
            maxDate={dayjs()}
            slots={{
              textField: AppTextField,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
            onChange={(val: any) => {
              field?.onChange?.(val);
              onChangeValueForm?.(val);
            }}
            {...datePickerProps}
          />
        )}
        {...controlProps}
      />
    </Stack>
  );
};

type AppFormDatePickerProps<T extends FieldValues> = StackProps & {
  label?: string;
  control: Control<any, object>;
  name: FieldPath<T>;

  rules?:
    | Omit<
        RegisterOptions<any, Path<T>>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
  controlProps?: Omit<ControllerProps, "render" | "name" | "control">;
  labelProps?: InputLabelProps;
  datePickerProps?: DatePickerProps<any>;
  onChangeValueForm?: (value: any) => void;
};

export default memo(AppFormDatePicker);
