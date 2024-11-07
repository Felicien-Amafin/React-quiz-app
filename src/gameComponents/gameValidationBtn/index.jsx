import ValidationBtn from "../../components/validationBtn";

function GameValidationBtn({isBtnDisabled, onValidation}) {

    return <ValidationBtn
        isBtnDisabled={isBtnDisabled}
        onValidation={onValidation}
    />
}

export default GameValidationBtn;