import React from "react";
import CardStage from "./CardStage";

function Flashcards(props) {
    const { updateValue, setUpdate, ObjectFlashcards } = props;
    return (
        <div className="flashcards">
            {ObjectFlashcards.map((ObjectFlashcard, index) => {
                const { ask, answer } = ObjectFlashcard;
                return (
                    <FlashcardState
                        key={ask}
                        objectSize={ObjectFlashcards.length}
                        propsIndex={index}
                        propsAsk={ask}
                        propsAnswer={answer}
                        updateValue={updateValue}
                        callback={(value) => { setUpdate(value); }}
                        answeredFeedback={answeredFeedback}
                        updating={updating}
                    />
                );
            })
            }
        </div>
    );
}
function FlashcardState(props) {
    const { objectSize, propsIndex, propsAsk, propsAnswer, callback, updateValue, updating } = props
    const icons = [
        <ion-icon style={{ color: "#333333" }} name="play-outline"></ion-icon>,
        <ion-icon style={{ color: "#FF3030" }} name="close-circle"></ion-icon>,
        <ion-icon style={{ color: "#FF922E" }} name="help-circle"></ion-icon>,
        <ion-icon style={{ color: "#2FBE34" }} name="checkmark-circle"></ion-icon>
    ];
    const [state, setState] = React.useState("closed");
    const [colorAnswered, setColorAnswered] = React.useState(["#333333", "none", icons[0]]);

    updating(updateValue, objectSize, propsIndex, callback);

    function answered(color, icon) {
        answeredFeedback(color, icon, setColorAnswered, setState, updateValue, callback);
    }
    return (
        <CardStage
            state={state}
            setState={setState}
            colorAnswered={colorAnswered}
            propsIndex={propsIndex}
            propsAsk={propsAsk}
            propsAnswer={propsAnswer}
            answered={answered}
            icons={icons} />
    );
}

function updating(updateValue, objectSize, propsIndex, callback) {
    setTimeout(()=>{
        if (updateValue === false && objectSize === propsIndex + 1) {
            callback({
                mistake: 0,
                initialNumber: 0,
                maxNumber: objectSize,
                iconsAnswered: [],
            })
        }
    },300);
    
}
function answeredFeedback(color, icon, setColorAnswered, setState, updateValue, callback) {
    setColorAnswered([color, "line-through", icon]);
    setState("answered");
    const currentNumber = updateValue.initialNumber + 1;
    const currentIcon = [...updateValue.iconsAnswered, icon];
    callback({
        ...updateValue,
        initialNumber: currentNumber,
        iconsAnswered: currentIcon
    });
    if (color === "#FF3030") {
        const mistakes = updateValue.mistake + 1;
        callback({
            ...updateValue,
            initialNumber: currentNumber,
            iconsAnswered: currentIcon,
            mistake: mistakes
        });
    }
}
export default Flashcards;