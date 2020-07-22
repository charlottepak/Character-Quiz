import React from "react";
import Post from "../../components/Post/Post";

function PostListPage(props) {
  return (
    <>
      <h1>All Posts</h1>
      <div>
        <div className="cards">
          {props.posts.length ? (
            props.posts.map((post) => (
              <div className="postCard">
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
