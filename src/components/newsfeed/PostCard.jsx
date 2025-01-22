import React from "react";

const PostCard = ({ author, content, likes, comments, timestamp, onLikeClick, onCommentClick }) => {
  return (
    <div className="post-card">
      <h3>{author}</h3>
      <p>{content}</p>
      <small>{timestamp}</small>
      <div>
        <button onClick={onLikeClick}>Like ({likes})</button>
        <button onClick={onCommentClick}>Comment ({comments})</button>
      </div>
    </div>
  );
};

export default PostCard;