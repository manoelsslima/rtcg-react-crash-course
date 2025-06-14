import classes from "./Post.module.css";

// make destructure in method avoid using props. in the code
// function Post(props) {
function Post({author, body}) {
    // "className" replaces "class" attribute in React
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}

export default Post;
