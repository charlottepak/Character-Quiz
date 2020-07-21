import React from "react";
import Post from "../../components/Post/Post";

function PostListPage(props) {
  return (
    <>
      <h1>Post List</h1>
      <div>
        <div>
          {props.posts.length ? (
            props.posts.map((post) => (
              <div>
                <Post
                  key={post._id}
                  post={post}
                  user={props.user}
                  handleDeletePost={props.handleDeletePost}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
export default PostListPage;
