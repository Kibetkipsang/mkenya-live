import React from "react";
import Comment from "./comment.jsx";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
};

export default CommentList;