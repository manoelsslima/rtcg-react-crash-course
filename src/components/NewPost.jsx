import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost(props) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        props.onAddPost(postData);
        props.onCancel(); // executing as a function
    }

    // const stateData = useState('');
    // stateData has two elements (because useState returns an array)
    // stateData[0] // current value
    // stateData[1] // state updating function
    // when we call update function, React will rerender the component with "current value" updated

    // const [enteredBody, setEnteredBody ] = useState('');

    /* will be passed to onChange event
    equivalent to:
    addEventListener('change'), function(event) {})
    */
    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value);
    // }

  // "htmlFor" replaces "for" attribute in React 
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
        <p className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
    </form>
  );
}

export default NewPost;