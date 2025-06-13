import classes from './NewPost.module.css';

function NewPost() {

    /* will be passed to onChange event
    equivalent to:
    addEventListener('change'), function(event) {})
    */
    function changeBodyHandler(event) {
        console.log(event.target.value);
    }

  // "htmlFor" replaces "for" attribute in React 
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;