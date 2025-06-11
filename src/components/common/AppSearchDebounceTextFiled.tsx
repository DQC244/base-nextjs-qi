"use client";

import { AppConstant } from "@/constant";
import { CommonUtils } from "@/utils";
import { TextFieldProps } from "@mui/material";
import { SearchIcon } from "../icons";
import AppTextField from "./AppTextField";
import { memo, useCallback, useEffect, useState } from "react";

const AppSearchDebounceTextFiled = (props: AppSearchDebounceTextFiledProps) => {
  const {
    onChangeValue,
    valueInput,
    hasEndIcon = true,
    debounceTime,
    skipSingleCharacter = true,
    ...otherProps
  } = props;

  const [value, setValue] = useState<string | number>("");

  const handleChangeValueDebounce = useCallback(
    CommonUtils.debounce((newValue) => {
      if (onChangeValue instanceof Function) {
        if (skipSingleCharacter && newValue.length === 1) return;
        onChangeValue(newValue);
      }
    }, debounceTime || AppConstant.DEBOUNCE_TIME_IN_MILLISECOND * 2),
    [onChangeValue, debounceTime]
  );

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      handleChangeValueDebounce(newValue);
    },
    [handleChangeValueDebounce]
  );

  useEffect(() => {
    setValue(valueInput ?? "");
  }, [valueInput]);

  return (
    <AppTextField
      value={value}
      onChange={handleChangeValue}
      slotProps={{
        input: {
          endAdornment: hasEndIcon ? (
            <SearchIcon sx={{ fontSize: 24 }} />
          ) : undefined,
        },
      }}
      {...otherProps}
    />
  );
};

type AppSearchDebounceTextFiledProps = Omit<TextFieldProps, "value"> & {
  valueInput?: string | number;
  onChangeValue?: (value: string) => void;
  hasEndIcon?: boolean;
  debounceTime?: number;
  skipSingleCharacter?: boolean;
};

AppSearchDebounceTextFiled.displayname = "AppSearchDebounceTextFiled";

export default memo(AppSearchDebounceTextFiled);
