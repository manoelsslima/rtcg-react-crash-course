import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

// const list = [{nome:"manoel", texto:"React.js é legal"}, {nome:"Maximilian", texto:"Confira o novo curso"}];

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function showModalHandler() {
        setModalIsVisible(true);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    );
}

export default App;
