import { useEffect, useRef, useState } from "react";
import './style.module.css';

export default function QuestionTimer({onTimeout, timeout, isTimerStoped}) {
    const [time, setTime] = useState(timeout);

    let timeoutRef = useRef();
    let intervalRef = useRef();

    if(isTimerStoped) {
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
    }

    useEffect(()=> {
        timeoutRef.current = setTimeout(onTimeout, timeout);

        return ()=> {
            clearTimeout(timeoutRef.current);
        }
    }, [onTimeout, timeout]);

    useEffect(()=> {
        intervalRef.current = setInterval(()=> {
            setTime((prevTime)=> prevTime - 100);
        }, 100)

        return ()=> {
            clearInterval(intervalRef.current);
        }
    }, []);
    
    return <progress max={timeout} value={time}/>
}