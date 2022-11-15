import "./GroupForm.css";
import React, { useState } from 'react'
import App from "./../../App.js"
import Popup from "../Popup/Popup";
import Header from "../Header/Header";


const GroupForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredAssignment, setEnteredAssignment] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const pointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    }
    const assignmentChangeHandler = (event) => {
        setEnteredAssignment(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            name: enteredName,
            points: enteredPoints,
            assignment: enteredAssignment
        }
        props.onSaveGroupData(groupData);
        setEnteredName('');
        setEnteredPoints('');
        setEnteredAssignment('');
    }

     const [buttonPopup, setButtonPopup] = useState(false);

    return <form onSubmit={submitHandler}>
        <div id="textDiv">
            
            {/* { <button  onClick={() => setButtonPopup(true)} id="addGroup">Create New Group</button>  } */}
            {/* <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} id={Popup}> */}
                <h3>Create a new group</h3>
                <label>Group name:</label>
            <input type="text" min="1" required="0" onChange={nameChangeHandler} value={enteredName}></input>
            <label>Points:</label>
            <input type="number" min="0" id="point" required="0" onChange={pointsChangeHandler} value={enteredPoints}></input>
            <label>Assignments:</label>
            <input type="number" min="0" id="assignments" required="0" onChange={assignmentChangeHandler} value={enteredAssignment}></input>
            <button type="submit">Add Group</button>
            {/* </Popup> */}
        </div>
    </form>
}

export default GroupForm;