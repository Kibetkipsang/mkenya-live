import React from "react";

const Comment = ({ author, content, timestamp }) => {
  return (
    <div className="comment">
      <strong>{author}</strong>
      <p>{content}</p>
      {timestamp}
    </div>
  );
};

export default Comment;