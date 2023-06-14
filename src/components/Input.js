function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.type}/>
        </div>
    )
}

export default Input

