import TextField, { TextFieldProps } from "@mui/material/TextField";
import { memo } from "react";

const AppIntegerInput = ({
  onChange,
  sx,
  ...otherProps
}: AppIntegerInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    // Xóa bất kỳ ký tự không phải số nguyên nào khỏi giá trị nhập vào
    const sanitizedValue: string = inputValue.replace(/[^0-9]/g, "");
    onChange?.(sanitizedValue);
  };

  return (
    <TextField
      size="small"
      sx={{
        width: 36,
        height: 24,
        padding: 0,
        "MuiOutlinedInput-notchedOutline": {
          borderRadius: "2px",
        },
        "& .Mui-disabled": {
          backgroundColor: "grey.300",
        },
        "& .MuiInputBase-root": {
          backgroundColor: "common.white",
          "& input": {
            fontSize: "12px",
            textAlign: "center",
            padding: "0px 4px",
            height: 24,
          },
        },
        ...sx,
      }}
      type="text"
      onChange={handleChange}
      {...otherProps}
    />
  );
};

type AppIntegerInputProps = Omit<TextFieldProps, "onChange"> & {
  onChange: (value: string) => void;
};

export default memo(AppIntegerInput);
