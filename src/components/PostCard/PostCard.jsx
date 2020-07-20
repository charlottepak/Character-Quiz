import React from "react";
import { Link } from 'react-router-dom';

function PostCard({ post, handleDeletePost, user }) {
  return (
    <div>
      <div>
        Character: {post.character}
        Comments: {post.comments}
        User: {post.userName}
      </div>

      <div className="card-action center">
        {post.userId === user._id ? (
          <Link
            className="btn btn-xs btn-warning"
            to={{
              pathname: "/edit",
              state: {post},
            }}
          >
            EDIT
          </Link>
        ) : (
          <></>
        )}{" "}
        {post.userId === user._id ? (
          <button
            className="btn btn-xs btn-warning"
            onClick={() => handleDeletePost(post._id)}
          >
            DELETE
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PostCard;
