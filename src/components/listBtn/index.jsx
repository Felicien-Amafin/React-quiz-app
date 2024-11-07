function ListBtn({isDisabled, text, className, onSelection}) {

    return <li>
        <button
            disabled={isDisabled}
            className={className}
            onClick={()=> {onSelection(text)}}
        >
            {text}
        </button>
    </li> 
}

export default ListBtn;