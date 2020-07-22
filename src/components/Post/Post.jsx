import React from "react";
import { Link } from "react-router-dom";

const Post = (props, user, post, handleDeletePost) => {
  return (
    <div>
      <div className="resultTitle">
        {props.user.name} got {props.post.character} !<br></br>
      </div>
      <div className="comments">
        "{props.post.comments}"
      </div>
      {props.post.userId === user._id ? (
        <Link className="btn btn-default" id="editbtn"
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
        <button className="delete" onClick={() => props.handleDeletePost(props.post._id)}>
          x
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Post;
