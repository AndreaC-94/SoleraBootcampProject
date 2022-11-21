import "./GroupForm.css";
import React, { useState } from 'react'


const GroupForm = (props) => {
    const [enteredName, setEnteredName] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
 

    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            name: enteredName
        }
        props.onSaveGroupData(groupData);
        setEnteredName('');
        
    }

    return <form >
        <div className="textDiv" onSubmit={submitHandler}>
            <div className="labelDiv">Insert your group name</div>
            <label>Group name:</label>
            <input type="text" min="1" required="0" onChange={nameChangeHandler} value={enteredName}></input><p></p>
            <button type="submit">Add Group</button>
        </div>
    </form>
}

export default GroupForm;