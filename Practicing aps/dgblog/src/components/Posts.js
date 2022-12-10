import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NewPost from "./NewPost";
import PostItem from "./PostItem";

function Posts() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Select the post</Typography>
      <Stack direction="row" spacing={2}>
        <Link to="/posts/1">First Post</Link>
        <Link to="/posts/2">Seconed Post</Link>
        <Link to="/posts/3">Third Post</Link>
        <Link to="/posts/newposts">New Post</Link>
        <Outlet />
      </Stack>
      <Typography variant="h6">The Post Content is as follows</Typography>
      <Routes>
        <Route path=":id" element={<PostItem />} />
        <Route path="newposts" element={<NewPost />} />
      </Routes>
    </Stack>
  );
}

export default Posts;
