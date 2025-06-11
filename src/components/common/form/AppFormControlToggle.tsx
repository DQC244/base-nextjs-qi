"use client";

import { DataConstant } from "@/constant";
import {
  InputLabel,
  InputLabelProps,
  Stack,
  StackProps,
  Switch,
  SwitchProps,
} from "@mui/material";
import React, { memo } from "react";
import {
  Control,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

const AppFormControlToggle = <T extends FieldValues>({
  label,
  control,
  name,
  rules,
  controlProps,
  required = false,
  labelProps,
  toggleProps,
  onChangeValueForm,
  ...otherProps
}: AppFormControlToggleProps<T>) => {
  return (
    <Stack
      direction="row-reverse"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      {...otherProps}
    >
      {label && (
        <InputLabel
          required={required}
          sx={{
            color: "text.primary",
          }}
          {...labelProps}
        >
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        rules={{ required, ...rules }}
        render={({ field: { onChange, ...otherFieldProps } }) => (
          <Switch
            onChange={(event, checked) => {
              if (onChangeValueForm instanceof Function)
                onChangeValueForm(event, Number(checked));

              onChange(Number(checked));
            }}
            {...otherFieldProps}
            checked={otherFieldProps.value}
            {...toggleProps}
          />
        )}
        {...controlProps}
      />
    </Stack>
  );
};

type AppFormControlToggleProps<T extends FieldValues> = StackProps & {
  label?: string;
  control: Control<any, object>;
  name: FieldPath<T>;

  rules?:
    | Omit<
        RegisterOptions<any, Path<T>>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
  required?: boolean;
  controlProps?: Omit<ControllerProps, "render" | "name" | "control">;
  labelProps?: InputLabelProps;
  toggleProps?: SwitchProps;
  onChangeValueForm?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: DataConstant.BOOLEAN_TYPE
  ) => void;
};

export default memo(AppFormControlToggle);
