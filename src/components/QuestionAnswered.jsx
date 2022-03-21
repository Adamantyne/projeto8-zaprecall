function QuestionAnswered(props){
    const{colorAnswered,propsIndex}=props;
    return (
        <article className="flashcard">
            <p style={{ color: colorAnswered[0], textDecoration: colorAnswered[1] }}>
                Pergunta {propsIndex + 1}
            </p>
            {colorAnswered[2]}
        </article>
    );
}
export default QuestionAnswered;