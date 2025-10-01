import React from "react";
import { Link, Navigate, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  const hook = useNavigate();

  const handleNavigate = () => {
    hook(`/posts/${id}`);
  };

  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show more</button>
      </Link>
      <button onClick={handleNavigate}>detail of: {id}</button>
    </div>
  );
};

export default Post;
