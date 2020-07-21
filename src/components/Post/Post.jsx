import React from "react";
import { Link } from "react-router-dom";

const Post = (props, user, post, handleDeletePost) => {
  return (
    <div>
      <div>
        {props.user.name} got {props.post.character} !<br></br>
        {props.post.comments}
      </div>
      {props.post.userId === user._id ? (
        <Link
          to={{
            pathname: "/edit",
            state: props.post,
          }}
        >
          EDIT
        </Link>
      ) : (
        <></>
      )}{" "}
      {props.post.userId === user._id ? (
        <button onClick={() => props.handleDeletePost(props.post._id)}>
          DELETE
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Post;
