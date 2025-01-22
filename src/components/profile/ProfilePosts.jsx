import React from 'react';

const ProfilePosts = ({ posts, onPostClick }) => {
  return (
    <div className="profile-posts">
      {posts.map((post) => (
        <div
          className="post"
          onClick={() => onPostClick(post.id)}
          key={post.id}
        >
          <p>{post.content}</p>
          <small>{post.likes} likes, {post.comments} comments</small>
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;