import logo from ".././assets/logo.png";
function Header() {
    return (
        <header className="small-logo">
            <img src={logo} alt="logo do site" />
            <h1>ZapRecall</h1>
        </header>
    );
}
export default Header; 