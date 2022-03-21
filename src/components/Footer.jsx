import Result from "./Result";
function Footer(props) {
    const { updateValue } = props;
    const { initialNumber, maxNumber, iconsAnswered, mistake } = updateValue;

    return (
        <footer>
            <Result initialNumber={initialNumber} maxNumber={maxNumber} mistake={mistake} />
            <p>{initialNumber}/{maxNumber} CONCLUÍDOS</p>
            <section className="icons">
                {iconsAnswered}
            </section>
        </footer>
    );
}
export default Footer;