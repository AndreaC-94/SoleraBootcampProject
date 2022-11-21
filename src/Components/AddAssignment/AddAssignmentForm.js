import "./AddAssignmentForm.css";
import React, { useState } from 'react';


function AddAssignmentForm(props) {
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredName, setEnteredName] = useState("");

    const PointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    };
    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    
   
    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            score: enteredPoints,
            task: enteredName,
        };
        props.onSaveGroupData(groupData);
        setEnteredPoints('');
        setEnteredName('');
    };
    return <form>
        <div className="textDiv" onSubmit={submitHandler}>
            <div className="labelDiv">Add assignments to all groups</div>
            <label>Name of the assignment: </label>
            <input type="text" min="1" required="0" onChange={NameChangeHandler} value={enteredName}></input><p></p>
            <label>Points: </label>
            <input type="number" min="0" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input><p></p>
            <button type="submit">Add Points</button>
        </div>

    </form>;
}

export default AddAssignmentForm;