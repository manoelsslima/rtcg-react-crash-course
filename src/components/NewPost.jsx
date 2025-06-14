import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost() {

    // const stateData = useState('');
    // stateData has two elements (because useState returns an array)
    // stateData[0] // current value
    // stateData[1] // state updating function
    // when we call update function, React will rerender the component with "current value" updated

    const [enteredBody, setEnteredBody ] = useState('');

    /* will be passed to onChange event
    equivalent to:
    addEventListener('change'), function(event) {})
    */
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

  // "htmlFor" replaces "for" attribute in React 
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;