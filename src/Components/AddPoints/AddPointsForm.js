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
            <div className="labelDiv">Add extra points to group</div>
            <label>Points: </label>
            <input type="number" min="0" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input><p></p>
            <label>Team: </label>
            <input type="text" min="1" required="0" onChange={TeamChangeHandler} value={enteredTeam}></input><p></p>
            <label>Description: </label>
            <input type="text" min="0" required="0" onChange={DescriptionChangeHandler} value={enteredDescription}></input><p></p>
            <button type="submit">Add Points</button>
        </div>
<<<<<<< HEAD
        
    </form>
=======

    </form>;
>>>>>>> master
}

export default AddPointsForm;