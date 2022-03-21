
import React from "react";
import HomeScreen from "./HomeScreen";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
function App(props) {
    const { ObjectFlashcards, setDeck, deckLength } = props
    const [updateValue, setUpdate] = React.useState(({
        mistake: 0,
        initialNumber: 0,
        maxNumber: deckLength,
        iconsAnswered: []
    }));
    if (deckLength !== updateValue.maxNumber) {
        setUpdate({ ...updateValue, maxNumber: deckLength });
    }

    return (
        <>
            <HomeScreen setDeck={setDeck} />
            <section className="deck container">

                <Header />

                <Flashcards ObjectFlashcards=
                    {ObjectFlashcards}
                    setUpdate={setUpdate}
                    updateValue={updateValue}
                />

                <Footer updateValue={updateValue} />

            </section>
        </>

    );
}

export default App;
