"use client";

import { ReactNode, memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const AppInfiniteScroll = ({ ...otherProps }: InfiniteScrollProps) => {
  return (
    <InfiniteScroll
      className="custom-scrollbar"
      loader={<></>}
      endMessage={<></>}
      {...otherProps}
    />
  );
};

type InfiniteScrollProps = {
  next: () => void;
  hasMore: boolean;
  children: ReactNode;
  dataLength: number;
  loader?: ReactNode;
  endMessage?: ReactNode;
  style?: object;
  height?: number | string;
  hasChildren?: boolean;
  scrollThreshold?: number;
};

export default memo(AppInfiniteScroll);
