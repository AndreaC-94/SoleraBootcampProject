import "./AddPointsForm.css"

const addPointsForm = () => {

    return <form>
        <div id="textDiv" hidden="">
            <label>Number of Points</label>
            <input type="number" min="0" id="point" required="0"></input>
            <label>Team</label>
            <input type="text" min="1" id="team" required="0"></input>
            <label>Description </label>
            <input type="text" min="0" id="description" required="0"></input>
            <button type="submit">Add Points</button>
        </div>
        
    </form>
}

export default addPointsForm;