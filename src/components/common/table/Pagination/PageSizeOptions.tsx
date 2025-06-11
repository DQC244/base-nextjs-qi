import { AppConstant } from "@/constant";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";

const PageSizeOptions = ({
  pageSize,
  pageSizeOptionList,
  onPageSizeChange,
}: PageSizeOptionsProps) => {
  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const newSize = Number(event.target.value);
    onPageSizeChange(newSize);
  };

  return (
    <Stack spacing={1.5} direction="row" alignItems="center">
      <Typography whiteSpace={"nowrap"}>Hiển thị</Typography>
      <Select
        id="select-page-size"
        sx={{
          width: 80,
          height: 24,
          padding: 0,
          fontSize: "12px",

          "& .MuiSelect-select": {
            py: 0,
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "4px",
          },
        }}
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        {(pageSizeOptionList || AppConstant.PAGE_SIZE_OPTIONS).map(
          (item, index) => (
            <MenuItem sx={{ fontSize: "12px" }} value={item} key={index}>
              {item}
            </MenuItem>
          )
        )}
      </Select>
      <Typography whiteSpace={"nowrap"}>{`của 1 trang.`}</Typography>
    </Stack>
  );
};

export type PageSizeOptionsProps = {
  pageSize: number;
  pageSizeOptionList?: number[];
  onPageSizeChange: (pageSize: number) => void;
};

export default memo(PageSizeOptions);
