import ConfigOptionsList from "../configOptionsList";
import ConfigValidationBtn from "../configValidationBtn";
import style from './style.module.css';
import '../../App.css';

function Config({title}) {

    return <section className={`page flexColCenter`}>
        <h1 className={style.mainTitle}>
            <span>Let's </span>
            <span>Quiz</span>
        </h1>
        <div className={`selection flexColCenter`}>
            <h2 className={style.configTitle}>{title}</h2>
            <ConfigOptionsList/>
            <ConfigValidationBtn/> 
        </div>
    </section>
}

export default Config;