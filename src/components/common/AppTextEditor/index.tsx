import { memo } from "react";
import dynamic from "next/dynamic";
import { Box, Skeleton } from "@mui/material";

const TinyEditor = dynamic(() => import("./TinyEditor"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: "100%",
        height: "250px",
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        sx={{
          borderRadius: "2px",
        }}
      />
    </Box>
  ),
});

const AppTextEditor = ({ value, onChange }: AppTextEditorProps) => {
  return (
    <div
      style={{
        minHeight: 250,
        width: "100%",
      }}
    >
      <TinyEditor value={value} onEditorChange={onChange} />
    </div>
  );
};

type AppTextEditorProps = {
  value?: any;
  onChange?: any;
  height?: number;
};

export default memo(AppTextEditor);
