import React from "react";
import logo from ".././assets/logo.png";
function HomeScreen(props) {
    const { setDeck } = props;
    const [homeScream, setHomeScream] = React.useState(true);
    return (
        <>
            {homeScream ? <Header setHomeScream={setHomeScream} callback={(value) => { setDeck(value) }} />
                : <></>}
        </>
    );

}
function Header(props) {
    const { setHomeScream, callback } = props;

    function selectDeck() {
        const comboBox = document.querySelector("select");
        callback(`deck${comboBox.selectedIndex}`);
        
    }
    return (
        <section className="home-screen container">
            <div className="logo">
                <img src={logo} alt="logo do site" />
                <h1>ZapRecall</h1>
            </div>
            <select onClick={selectDeck} className="selection-deck" name="deks">
                <option value="dekc1">Escolha seu deck</option>
                <option value="dekc1">react</option>
                <option value="deck2">contas complicadas</option>
            </select>
            <button onClick={() => setHomeScream(false)} className="start">
                Iniciar Recall!
            </button>
        </section>
    )
}

export default HomeScreen;