import Config from "../../configComponents/config";
import { configPages } from "../../../assets/constants";
import { useUserSelection } from "../../hooks/useUserSelection";
import { useNavigate } from "react-router-dom";
import { GameConfigContext } from "../../context";
import '../../App.css';

function Topics() {
    const { userSelection, setUserSelection, isUserSelectionEmpty } = useUserSelection();
    const selections = configPages.topics.selections;
    const navigate = useNavigate();
    
    const handleValidation = ()=> {
        navigate('/quiz-levels', {state: {topic: userSelection}});
    };

    const contextValue = { 
        selections, 
        userSelection, 
        setUserSelection, 
        isUserSelectionEmpty, 
        handleValidation 
    };

    return <>
        <GameConfigContext.Provider value={contextValue}>
            <Config title='Topics'/>
        </GameConfigContext.Provider>
    </>
}

export default Topics;