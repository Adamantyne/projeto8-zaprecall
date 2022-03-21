function QuestionClosed(props){
    const{setState,colorAnswered,propsIndex}=props;
    return (
        <article className="flashcard" onClick={() => setState("ask")}>
            <p style={{ color: colorAnswered[0], textDecoration: colorAnswered[1] }}>
                Pergunta {propsIndex + 1}
            </p>
            {colorAnswered[2]}
        </article>
    );
}
export default QuestionClosed;