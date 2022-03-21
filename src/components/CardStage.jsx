import QuestionClosed from "./QuestionClosed";
import QuestionAsk from "./QuestionAsk.jsx";
import QuestionAnswer from "./QuestionAnswer";
import QuestionAnswered from "./QuestionAnswered";
import arrow from ".././assets/setinha.png";

function CardStage(props){
    const{state,setState,colorAnswered,propsIndex,propsAsk,propsAnswer,answered,icons}=props;
    if (state === "closed") {
        return (
            <QuestionClosed setState={setState} colorAnswered={colorAnswered} propsIndex={propsIndex}/>
        );
    }
    else if (state === "ask") {
        return (
            <QuestionAsk propsAsk={propsAsk} setState={setState} arrow={arrow}/>
        );
    }
    else if (state === "answer") {
        return (
            <QuestionAnswer propsAnswer={propsAnswer} answered={answered} icons={icons} />
        );
    }
    else if (state === "answered") {
        return (
            <QuestionAnswered colorAnswered={colorAnswered} propsIndex={propsIndex} />
        );
    }
}
export default CardStage;