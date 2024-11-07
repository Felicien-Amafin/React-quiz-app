import style from './style.module.css';

function QuestionNumber({questionNumber}) {
    
    return <p className={style.questionNum}>
        <span>{questionNumber}</span> 
        <span> /20</span>
    </p>
}

export default QuestionNumber;