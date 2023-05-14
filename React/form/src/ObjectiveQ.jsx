
function ObjectiveQ(props) {
    const ansList = props.answers.map(item => 
        <label key = {item.id}>
            <input type="checkbox" />
            <input 
                type= "text"
                name= "answers"
                placeholder={item.ans} 
                value={item.ans}
                onChange={(e) => props.handleInput(e, props.id, item.id)}
            />
            <button onClick={(e) => props.handleDelete(e, props.id, item.id)}>X</button>
        </label>,
    )
    return (
        <div>
            <ul>{ansList}</ul>
            <button onClick={(e) => props.handleAddOptions(e, props.id)}>Add Options</button>
        </div>
    )
}

export default ObjectiveQ