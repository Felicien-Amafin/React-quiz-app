import { useRef } from "react";
import ListBtn from "../../components/listBtn";
import style from "./style.module.css";
import { useQuizGameContext } from "../../hooks/useQuizGameContex";
import { useUserSelection } from "../../hooks/useUserSelection";

export default function AnswersList(/* {answers, userSelection, isUserAnswerValidated, onSelection} */) {
   /*  const { userSelection, setUserSelection } = useUserSelection();
    const { quiz, isUserAnswerValidated } = useQuizGameContext(); */

    /* const answers = [quiz.correctAnswer, ...quiz.incorrectAnswers];

    const correctAnswer = answers[0];
    const shuffledAnswersRef = useRef(); */

    /* if(!shuffledAnswersRef.current) {
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(()=> Math.random() - 0.5);
    } */
   
    return <div className={`selection flexColCenter`}>
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
                    onSelection={setUserSelection(answer)}
                />
            })}
        </ul>
    </div>
    
}