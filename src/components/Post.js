import React from "react";
import "./Post.css";
import { Users } from "../data.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = ({ post }) => {
  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div className="top_post">
          <div className="top_info">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="profile_picture"
            />
            <h3 className="name_post">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </h3>
            <span>{post.date}</span>
          </div>
          <div className="top_icon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="center_post">
          <h3 className="description">{post.desc}</h3>
          <img src={post?.photo} alt="" />
        </div>
        <div className="bottom_post">
          <div className="bottom_left">
            <img src="assets/like.png" alt="like image" />
            <img src="assets/heart.png" alt="favorite image" />
            <p>32 pepople like it</p>
          </div>
          <div className="bottom_right">
            <span>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
