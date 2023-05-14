
function YesNoQ(props) { 
    return (
        <div>
            <ul>
                
                    <label>
                        <input 
                            type="radio"
                            name={props.id}
                            value="Yes"
                        />
                        YES
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name={props.id}
                            value="No"
                        />
                        NO
                    </label>
            </ul>
        </div>
    )
}

export default YesNoQ