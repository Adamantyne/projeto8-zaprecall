function QuestionAsk(props){
    const{propsAsk,setState,arrow}=props;
    return (
        <article className="question">
            <p>{propsAsk}</p>
            <img onClick={() => setState("answer")} src={arrow} alt="icone para ver resposta" />
        </article>
    );
}
export default QuestionAsk;