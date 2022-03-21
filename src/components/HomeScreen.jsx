import React from "react";
import logo from ".././assets/logo.png";
function HomeScreen() {
    const [homeScream, setHomeScream] = React.useState(true);
    return (
        <>
            {homeScream ? <Header setHomeScream={setHomeScream} /> : <></>}
        </>
    );

}
function Header(props) {
    const { setHomeScream } = props;
    return (
        <section className="home-screen container">
            <div className="logo">
                <img src={logo} alt="logo do site" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => setHomeScream(false)} className="start">
                Iniciar Recall!
            </button>
        </section>
    )
}

export default HomeScreen;