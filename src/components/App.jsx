
import React from "react";
import HomeScreen from "./HomeScreen";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
function App(props) {
    const { ObjectFlashcards } = props
    const [updateValue, setUpdate] = React.useState(false);

    return (
        <>
            <HomeScreen />
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
