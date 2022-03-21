import reactDom from "react-dom";
import App from "./components/App";
import "./css/reset.css";
import "./css/style.css";

function Root() {
    const ObjectFlashcards = [{
        ask: "1",
        answer: "sfafaf"
    }, {
        ask: "2",
        answer: "sfafaf"
    }, {
        ask: "3",
        answer: "sfafaf"
    }, {
        ask: "4",
        answer: "sfafaf"
    }].sort(() => Math.random() - 0.5);
    return (
        <>
        <App ObjectFlashcards={ObjectFlashcards}/>
        </>
    );
}
const root = document.querySelector(".root");
reactDom.render(<Root />, root);