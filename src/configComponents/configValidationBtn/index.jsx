import ValidationBtn from '../../components/validationBtn';
import { useGameConfigContext } from '../../hooks/useGameConfigContext';

function ConfigValidationBtn() {
    const { isUserSelectionEmpty, handleValidation } = useGameConfigContext();

    return <ValidationBtn
        isBtnDisabled={isUserSelectionEmpty}
        onValidation={handleValidation}
    />
}

export default ConfigValidationBtn;