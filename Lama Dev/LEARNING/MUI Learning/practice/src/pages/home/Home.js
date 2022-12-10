import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

function Home() {
  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    display: "flex",
    justifyContent: "space-between",
  }));

  return (
    <StyledStack direction="row" spacing={1} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
    </StyledStack>
  );
}

export default Home;
