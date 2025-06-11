import { Grid, GridProps } from "@mui/material";
import React, { memo } from "react";

const GridFormContainer = (props: GridProps) => {
  return <Grid container rowSpacing={2} columnSpacing={2} {...props} />;
};

export default memo(GridFormContainer);
