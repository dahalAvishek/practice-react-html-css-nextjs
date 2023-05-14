function TodoItem(props) {
    const myStyle = {
        color: "green",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
    return (
        <div>
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} 
            />
            <p style = {props.item.completed && myStyle}>{props.item.text}</p>
            <button onClick={() => props.handleClick(props.item.id)}> X </button>
        </div>
    )
}

export default TodoItem