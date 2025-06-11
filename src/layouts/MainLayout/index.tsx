import { Stack } from "@mui/material";
import { JSX, memo, ReactNode } from "react";
import Container from "./Container";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Loading from "./Loading";

const MainLayout = ({
  children,
  ...otherProps
}: MainLayoutProps): JSX.Element => {
  return (
    <>
      <Loading />
      <Stack
        direction="row"
        sx={{
          maxWidth: "100vw",
          width: "100%",
          transition: "all .25s linear",
          height: "100vh",
        }}
        {...otherProps}
      >
        <SideBar />
        <Stack
          flex={1}
          height="100vh"
          sx={{
            minWidth: 0,
          }}
        >
          <TopBar />
          <Container>{children}</Container>
        </Stack>
      </Stack>
    </>
  );
};

export interface IProps {
  children?: ReactNode;
  className?: string;
  classes?: object;
}
type MainLayoutProps = IProps;

export default memo(MainLayout);
