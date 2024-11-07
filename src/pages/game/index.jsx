import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchQuestions, formatDataToFetch } from "../../helpers/data";
import Quiz from "../../gameComponents/quiz";
import QuestionTimer from "../../gameComponents/questionTimer";
import QuestionNumber from "../../gameComponents/questionNumber";
import '../../App.css'
import style from './style.module.css';

function Game() {
    const [ error, setError ] = useState(false);
    const [ questions, setQuestions ] = useState(false);
    const [ userResponses, setUserResponses ] = useState([]);
    const [ isTimerStoped, setIsTimerStoped] = useState(false);

    const location = useLocation();
    const userCorrectResponses = useRef([]);

    const currentQuestionIndex = userResponses.length;

    const handleValidation = useCallback((userResponse)=> {
        setIsTimerStoped(true);

        setTimeout(()=> {
            setUserResponses((prevResponses)=> {
                const newResponses = [...prevResponses, userResponse];
                return newResponses;
            });

            setIsTimerStoped(false);
        }, 3000)
    }, []);

 /*    const contextValue = {
        quiz: questions[currentQuestionIndex], 
        isUserAnswerValidated: isTimerStoped, 
        onValidation: handleValidation
    } */

    useEffect(()=> {
        const { topic, level } = formatDataToFetch(location.state.topic, location.state.level);
        
        fetchQuestions(topic, level, setError, setQuestions);
    }, [location.state.topic, location.state.level, setError, setQuestions]);

    if(userResponses.length > 0 && !isTimerStoped) {
        const userPrevResponse = userResponses[userResponses.length -1];
        const prevCorrectAnswer = questions[userResponses.length -1].correctAnswer;
        
        if(userPrevResponse === prevCorrectAnswer) {
            userCorrectResponses.current.push(userPrevResponse);
        }
    }

    const gameOver = (userResponses.length === questions.length) && !isTimerStoped;
    const score = userCorrectResponses.current.length;
    
    return <>
        {(!questions && !error) && <p className={style.isloading}>Game is Loading...</p>}
        {error && <p>{error}</p>}
        {(questions && !gameOver) && <section className={`page flexColCenter`}>
            <div className={`${style.timerPlusQnumber} flexColCenter`}>
                <QuestionNumber questionNumber={(userResponses.length + 1)}/>
                <QuestionTimer 
                    key={`timer-${currentQuestionIndex}`}
                    onTimeout={()=> {handleValidation('')}}
                    timeout={20000}
                    isTimerStoped={isTimerStoped}
                />
            </div>
            <Quiz 
                key={`quiz-${currentQuestionIndex}`}
                quiz={questions[currentQuestionIndex]}
                isUserAnswerValidated={isTimerStoped}
                onValidation={handleValidation}
            />
            
        </section>}
        {gameOver && <p className={style.gameOver}>Quiz terminated! your score: {score} good answers</p>}
    </>
}

export default Game;