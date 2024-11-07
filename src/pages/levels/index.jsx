import Config from "../../configComponents/config";
import { configPages } from "../../../assets/constants";
import { useUserSelection } from "../../hooks/useUserSelection";
import { useLocation, useNavigate } from "react-router-dom";
import { GameConfigContext } from "../../context";
import '../../App.css';

function Levels() {
    const selections = configPages.levels.selections;
    const { userSelection, setUserSelection, isUserSelectionEmpty } = useUserSelection();

    const navigate = useNavigate();
    const location = useLocation();

    const handleValidation = ()=> {
        navigate('/quiz-game', {
            state: {
                topic: location.state.topic,
                level: userSelection
            },
        });
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
            <Config title='Levels'/>
        </GameConfigContext.Provider>
    </>
}

export default Levels;