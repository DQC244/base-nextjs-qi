import { AppImage } from "@/components/common";
import React from "react";

const page = () => {
  return (
    <div>
      <AppImage
        src={`${process.env.NEXT_PUBLIC_DOMAIN}/uploads_v2/system/nam-moi-2025.jpg`}
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
