import React from "react";
import { useParams } from "react-router-dom";

function PostItem() {
  const { id } = useParams();
  return <div>PostItem {id}</div>;
}

export default PostItem;
