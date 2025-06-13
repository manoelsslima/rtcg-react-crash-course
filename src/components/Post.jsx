import classes from "./Post.module.css";

function Post(props) {
  // use classes as props
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;
