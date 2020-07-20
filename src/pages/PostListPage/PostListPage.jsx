import React from 'react';
import Post from '../../components/Post/Post'

function PostListPage(props) {
    return (
        <>
        <h1 className="blue-grey darken-2 white-text">Post List</h1>
        <div className="row m2">
        <div className='PostListPage'>
            {props.posts.length ? props.posts.map(post =>
            <div className="col s15">
                <Post
                className="card blue-grey darken-1"
                key={post._id}
                post={post}
                user={props.user}
                handleDeletePost={props.handleDeletePost}
                />
                </div>
                )
                :
                <div></div>
                }
                </div>
        </div>
        </>
    )
}
export default PostListPage;