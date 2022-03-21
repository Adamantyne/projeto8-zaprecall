import reactDom from "react-dom";
import App from "./components/App";
import React from "react";
import Decks from "./components/Decks";
import "./css/reset.css";
import "./css/style.css";

function Root() {
    const [updateDeck, setDeck] = React.useState("deck1");
    const ObjectFlashcards = Decks(updateDeck).sort(() => Math.random() - 0.5);
    const [deckLength, setDeckLength] = React.useState(ObjectFlashcards.length);
    if (deckLength !== ObjectFlashcards.length) {
        setDeckLength(ObjectFlashcards.length);
    }
    
    return (
        <>
            <App
                ObjectFlashcards={ObjectFlashcards}
                setDeck={setDeck}
                deckLength={deckLength}
            />
        </>
    );
}
const root = document.querySelector(".root");
reactDom.render(<Root />, root);