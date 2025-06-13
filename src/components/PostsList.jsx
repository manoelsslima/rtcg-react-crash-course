import Post from "./Post";
import classes from './PostsList.module.css';

function PostList() {
    return (
      <>
        <ul className={classes.posts}>
            <Post author="Maximilian" body="React.js is awesome" />
            <Post author="Manoel" body="Check out the full course" />
        </ul>
      </>
    );
}

export default PostList;