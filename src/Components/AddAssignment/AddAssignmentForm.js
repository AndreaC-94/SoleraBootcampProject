import "./AddAssignmentForm.css";
import React, { useState } from 'react';

function AddAssignmentForm(props) {
    const [enteredPoints, setEnteredPoints] = useState(0);
    const [enteredName, setEnteredName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const PointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    };
    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const DescriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const assignData = {
            points: enteredPoints,
            name: enteredName,
            description: enteredDescription
        };
        console.log(assignData);

        fetch('http://localhost:8081/assignment/createAssignment',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(assignData),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        setEnteredPoints('');
        setEnteredName('');
        setEnteredDescription('');
    };

    return <form onSubmit={submitHandler}>
        <div className="textDiv">
            <h1>Add assignments to all groups</h1><p></p>
            <label className="label">Name of the assignment: </label>
            <input type="text" min="1" onChange={NameChangeHandler} value={enteredName}></input><p></p>
            <label className="label">Points: </label>
            <input type="number" min="0" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input><p></p>
            <label className="label">Description: </label>
            <input type="text" onChange={DescriptionChangeHandler} value={enteredDescription}></input><p></p>
            <button type="submit" className="Button">Add Points</button>
        </div>
    </form>;
}

export default AddAssignmentForm;