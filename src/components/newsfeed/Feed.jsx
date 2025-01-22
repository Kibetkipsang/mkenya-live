import React from "react";
import PostCard from "./PostCard";

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          timestamp={post.timestamp}
          onLikeClick={() => alert(`Liked post ${post.id}`)}
          onCommentClick={() => alert(`Commented on post ${post.id}`)}
        />
      ))}
    </div>
  );
};

export default Feed;