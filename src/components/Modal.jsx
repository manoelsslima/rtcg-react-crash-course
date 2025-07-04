import classes from './Modal.module.css';

// use function Modal({props}) to destructure properties and access them directly
// e.g.: {props.children} => {children}
// children is used only to render content between opening and enclosing tags of custom components
function Modal(props) {

    function stopPropagation(e) {
        e.stopPropagation();
    }
    return <>
        <div className={classes.backdrop} onClick={props.onClose}>
            <dialog open={true} className={classes.modal} onClick={stopPropagation}>
                {props.children}
            </dialog>
        </div>
    </>
}

export default Modal;