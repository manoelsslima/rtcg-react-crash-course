import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import {useState} from "react";
import Modal from "./Modal";

function PostList() {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            {modalIsVisible === true ?
                <Modal onClose={hideModalHandler}> {/* NewPost component will be received as a props.children on Modal component*/}
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                </Modal> : null // or false
            }
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manoel" body="Check out the full course"/>
            </ul>
        </>
    );
}

export default PostList;