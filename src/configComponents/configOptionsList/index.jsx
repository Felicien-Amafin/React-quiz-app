import ListBtn from '../../components/listBtn'
import { useGameConfigContext } from '../../hooks/useGameConfigContext';
import '../../App.css';
import style from './style.module.css';

function ConfigOptionsList() {
    const { selections, userSelection, setUserSelection } = useGameConfigContext();

    return <ul className={`list flexColCenter`}>
        {selections.map((option)=> {

            let className = style.option + ' ';
            className += option === userSelection ? style[`selected`] : '';
        
            return <ListBtn
                key={option}
                isDisabled={false}
                text={option}
                className={className}
                onSelection={()=> {setUserSelection(option)}}
            />
        })}
    </ul>
}

export default ConfigOptionsList;