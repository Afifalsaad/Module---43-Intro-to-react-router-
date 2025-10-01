import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h3>These are my posts: {posts.length}</h3>
      {
        posts.map(post=><Post  post={post}></Post>)
      }
    </div>
  );
};

export default Posts;
