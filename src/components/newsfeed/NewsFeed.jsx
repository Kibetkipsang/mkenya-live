import React from "react";
import Feed from "./Feed";

const Newsfeed = ({ posts }) => {
  return (
    <div className="newsfeed">
      <h2>Newsfeed</h2>
      <Feed posts={posts} />
    </div>
  );
};

export default Newsfeed;