function QuestionAnswer(props) {
    const { propsAnswer, answered, icons } = props;

    const optionsObject = [{
        title: "dont-remember",
        text: "Não lembrei",
        color: "#FF3030",
        icons: icons[1],
        answered: answered
    }, {
        title: "almost-remember",
        text: "Quase não lembrei",
        color: "#FF922E",
        icons: icons[2],
        answered: answered
    }, {
        title: "zap",
        text: "Zap!",
        color: "#2FBE34",
        icons: icons[3],
    }]
    return (
        <article className="question">
            <p>{propsAnswer}</p>
            <section className="options">
                {optionsObject.map(option => {
                    const { title, text, color, icons } = option;
                    return (
                        <Options
                            key={title}
                            title={title}
                            text={text}
                            color={color}
                            icons={icons}
                            answered={answered}
                        />
                    );
                })
                }
            </section>
        </article>
    );
}
function Options(props) {
    const { title, text, color, icons, answered } = props;
    return (
        <div className={title} onClick={() => answered(color, icons)}>
            <p>{text}</p>
        </div>
    );
}
export default QuestionAnswer;