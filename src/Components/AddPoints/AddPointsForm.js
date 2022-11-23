import "./AddPointsForm.css";
import React, { useState } from 'react';

function AddPointsForm(props) {
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredTeam, setEnteredTeam] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const PointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    };
    const TeamChangeHandler = (event) => {
        setEnteredTeam(event.target.value);
    };
    const DescriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            points: enteredPoints,
            team: enteredTeam,
            description: enteredDescription
        };
        props.onSaveGroupData(groupData);
        setEnteredPoints('');
        setEnteredTeam('');
        setEnteredDescription('');
    };

    return <form>
        <div className="textDiv" onSubmit={submitHandler}>
            <h1>Add extra points to group</h1><p></p>
            <label className="label">Points: </label>
            <input type="number" min="0" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input><p></p>
            <label className="label">Group: </label>
            <input type="text" min="1" required="0" onChange={TeamChangeHandler} value={enteredTeam}></input><p></p>
            <label className="label">Description: </label>
            <input type="text" min="0" required="0" onChange={DescriptionChangeHandler} value={enteredDescription}></input><p></p>
            <button type="submit" className="Button">Add Points</button>
        </div>

    </form>;
}

export default AddPointsForm;