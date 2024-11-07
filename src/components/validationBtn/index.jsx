import style from './style.module.css';

function ValidationBtn({isBtnDisabled, onValidation}) {
    let className = style.btn + ' ';
    className += isBtnDisabled ? style[`disabled`] : style[`active`];

    return <button 
        className={className}
        disabled={isBtnDisabled} 
        onClick={onValidation}
    >
        Validate
    </button>
}

export default ValidationBtn;