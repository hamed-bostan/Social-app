import React, { useState } from "react";
import "./Post.css";
import { Users } from "../data.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = ({ post }) => {
  const [likeCounter, setLikeCounter] = useState(post.like);
  const [iseLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    setLikeCounter(iseLiked ? likeCounter - 1 : likeCounter + 1);
    setIsLiked(!iseLiked);
  };

  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div className="top_post">
          <div className="top_info">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="profile_picture"
            />
            <span className="name_post">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="post_date">{post.date}</span>
          </div>
          <div className="top_icon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="center_post">
          <span className="description">{post.desc}</span>
          <img src={post?.photo} alt="" />
        </div>
        <div className="bottom_post">
          <div className="bottom_left">
            <img
              src="assets/like.png"
              alt="like image"
              onClick={clickHandler}
            />
            <img
              src="assets/heart.png"
              alt="favorite image"
              onClick={clickHandler}
            />
            <p className="post_like_counter">{likeCounter} pepople like it</p>
          </div>
          <div className="bottom_right">
            <span className="post_comment_text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
