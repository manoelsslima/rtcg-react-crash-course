import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

function PostList(props) {

    return (
        <>
            {props.isPosting === true ?
                <Modal onClose={props.onStopPosting}> {/* NewPost component will be received as a props.children on Modal component*/}
                    <NewPost onCancel={props.onStopPosting}/>
                </Modal> : false // or false
            }
            <ul className={classes.posts}>
                <Post author="Manoel" body="Check out the full course"/>
            </ul>
        </>
    );
}

export default PostList;