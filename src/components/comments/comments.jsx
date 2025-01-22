import React from "react";
import CommentList from "./commentList";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default Comments;