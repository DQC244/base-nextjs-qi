import { Checkbox, CheckboxProps } from "@mui/material";
import { Ref, forwardRef, memo } from "react";
import {
  CheckedIconCustom,
  IndeterminateCheckBoxIcon,
  SquareIcon,
} from "../icons";

const AppCheckbox = forwardRef(
  ({ sx, ...otherProps }: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    return (
      <Checkbox
        sx={{
          fontSize: 24,
          borderRadius: "50%",
          p: 1,
          color: "text.primary",
          "&& .MuiSvgIcon-root": {
            cursor: "default",
          },
          "&.Mui-disabled": {
            color: "#b9b9b9",
          },
          ...sx,
        }}
        checkedIcon={<CheckedIconCustom />}
        icon={<SquareIcon />}
        indeterminateIcon={
          <IndeterminateCheckBoxIcon
            sx={{
              color: "primary.main",
            }}
          />
        }
        inputRef={ref}
        {...otherProps}
      />
    );
  }
);

AppCheckbox.displayName = "AppCheckbox";
export default memo(AppCheckbox);
