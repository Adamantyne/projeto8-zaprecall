function Result(props) {
    const { initialNumber, maxNumber, mistake } = props

    if (initialNumber === maxNumber && mistake === 0) {

        return (
            <ResultProps
                emojicon={<strong>🥳</strong>}
                title={<p>Parabéns!</p>}
                phrase={<p>Você não esqueceu de<br />nenhum flashcard!</p>}
            />
        );
    }
    else if (initialNumber === maxNumber && mistake !== 0) {
        return (
            <ResultProps
                emojicon={<strong>😢</strong>}
                title={<p>Putz...</p>}
                phrase={<p> Ainda faltam alguns...<br />Mas não desanime!</p>}
            />
        );
    }
    else { return <></> }
}
function ResultProps(props) {
    const { emojicon, title, phrase } = props;
    return (
        <section className="result">
            <div className="emojicon">
                {emojicon}{title}
            </div>
            {phrase}
        </section>
    );
}
export default Result;