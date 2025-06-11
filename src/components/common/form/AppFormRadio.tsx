"use client";
import {
  Control,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  FormControlLabel,
  FormLabel,
  FormLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Stack,
  StackProps,
} from "@mui/material";
import { RefAttributes, memo } from "react";
import { IOption } from "../AppAutoComplete";

const AppFormRadio = <T extends FieldValues>({
  control,
  name,
  radioList = [],
  controlProps,
  onChangeValueForm,
  radioProps,
  defaultValue,
  label,
  radioGroupProps,
  formLabelProps,
  isDisableValue,
  rules,
  ...otherProps
}: AppFormRadioProps<T>) => {
  return (
    <Stack {...otherProps}>
      {label && (
        <FormLabel required={Boolean(rules?.required)} {...formLabelProps}>
          {label}
        </FormLabel>
      )}
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, ...otherFieldProps } }) => (
          <RadioGroup
            row
            onChange={(_, value) => {
              if (onChangeValueForm instanceof Function)
                onChangeValueForm(value);
              onChange(value);
            }}
            {...otherFieldProps}
            {...radioGroupProps}
          >
            {radioList.map((item) => {
              const isDisabled = isDisableValue?.some(
                (val) => val == item.value
              );
              return (
                <FormControlLabel
                  key={item.id}
                  value={item.id}
                  label={item.label}
                  disabled={isDisabled}
                  control={
                    <Radio
                      checked={otherFieldProps.value == item.id}
                      {...radioProps}
                    />
                  }
                />
              );
            })}
          </RadioGroup>
        )}
        {...controlProps}
      />
    </Stack>
  );
};

type AppFormRadioProps<T extends FieldValues> = StackProps & {
  control: Control<any, object>;
  name: FieldPath<T>;
  radioList: Array<IOption>;

  radioProps?: RadioProps & RefAttributes<HTMLInputElement>;
  controlProps?: Omit<ControllerProps, "render" | "name" | "control">;
  label?: string;
  formLabelProps?: FormLabelProps;
  radioGroupProps?: RadioGroupProps;
  onChangeValueForm?: (value?: string | number) => void;
  isDisableValue?: Array<number | string>;
  rules?: RegisterOptions<FieldValues>;
};

export default memo(AppFormRadio);
