import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";
import {useState} from "react";

function PostList(props) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        // setPosts([postData, ...posts]);
        // se o novo estado depende do estado antigo, entao deve-se usar uma
        // função para atualiar o estado
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {props.isPosting === true ?
                <Modal onClose={props.onStopPosting}> {/* NewPost component will be received as a props.children on Modal component*/}
                    <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler}/>
                </Modal> : false // or false
            }
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>)}
            {posts.length === 0 && (
                // cannot use text-align. use camel case!
                <div style={{ textAlign: "center", color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostList;