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
            <ul className={classes.posts}>
                <Post author="Manoel" body="Check out the full course"/>
            </ul>
        </>
    );
}

export default PostList;