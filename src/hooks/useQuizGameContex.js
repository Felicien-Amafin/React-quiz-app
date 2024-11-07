import { useContext } from "react";
import { QuizGameContext } from "../context";

export const useQuizGameContext = ()=> {
    const quizGame = useContext(QuizGameContext);

    if(quizGame === undefined) {
        throw new Error('useQuizGameContext must be used with QuizGameContext');
    }

    return quizGame;
}