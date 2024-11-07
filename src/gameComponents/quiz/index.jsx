import { useUserSelection } from "../../hooks/useUserSelection";
import GameValidationBtn from "../gameValidationBtn";
import ListBtn from "../../components/listBtn";
import { useRef } from "react";
import style from './style.module.css';

function Quiz({quiz, isUserAnswerValidated, onValidation}) {
    const { userSelection, setUserSelection, isUserSelectionEmpty } = useUserSelection();

    const questionText = quiz.question.text;
    const answers = [quiz.correctAnswer, ...quiz.incorrectAnswers];

    const correctAnswer = answers[0];
    const shuffledAnswersRef = useRef();

    if(!shuffledAnswersRef.current) {
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(()=> Math.random() - 0.5);
    }
    /* const questionText = quiz.question.text;
    const answers = [quiz.correctAnswer, ...quiz.incorrectAnswers]; */
 
    return <>
        <h2 className={style.question}>{questionText}</h2>
        <div className={`selection flexColCenter`}>
            <ul className={`list flexColCenter`}>
                {shuffledAnswersRef.current.map((answer)=> {
                    let className = style.answer + ' ';

                    if(answer === userSelection && !isUserAnswerValidated) { className += style[`selected`]; }

                    if(isUserAnswerValidated) {
                        if((answer === userSelection) && (answer !== correctAnswer)) { className += style[`wrong`] }
                        if((answer !== userSelection) && (answer !== correctAnswer)) { className += style[`disabled`] }
                        if(answer === correctAnswer) { className += style[`right`] }
                    }

                    const isAnswerDisabled = (answer !== userSelection) && (isUserAnswerValidated);
            
                    return <ListBtn 
                        key={answer}
                        isDisabled={isAnswerDisabled}
                        text={answer}
                        className={className}
                        onSelection={setUserSelection}
                    />
                })}
            </ul>
        </div>
        <GameValidationBtn
            onValidation={()=> {onValidation(userSelection)}}
            isBtnDisabled={isUserSelectionEmpty || isUserAnswerValidated}
        />

        {/* <AnswersList
            userSelection={userSelection}
            answers={answers}
            userSelection={userSelection}
            isUserAnswerValidated={isUserAnswerValidated}
            onSelection={setUserSelection}
        /> */}
        
        
    </>
}

export default Quiz;

