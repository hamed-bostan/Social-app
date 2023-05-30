import React from "react";
import Share from "./Share";
import Post from "./Post";
import "./Feed.css";
import { Posts } from "../data.js";

const Feed = () => {
  return (
    <div className="feed_container">
      <Share />
      {Posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
