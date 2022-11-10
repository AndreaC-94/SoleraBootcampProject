

const groupForm = () => {
    return <form>
         <div>
            <label>Group name:</label>  
            <input type="text"></input>
            <label>Points:</label>
            <input type="number"></input>
            <label>Assignments:</label>
            <input type="number"></input>
        </div>
        <div >
            <button type="submit">Add Group</button>
        </div>
    </form>
}

export default groupForm;