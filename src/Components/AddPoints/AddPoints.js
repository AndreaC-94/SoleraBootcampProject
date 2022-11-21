import AddPointsForm from "./AddPointsForm";

const addPoints = (props) => {
    const saveAddPointsDataHandler = (enteredAddPointsData) =>{
        const addpoints = {
            ...enteredAddPointsData,
            id: Math.random().toString()
        }
        props.onAddPoints(addpoints)
    }
   
    return <div>
        <AddPointsForm onSaveAddPointsData = {saveAddPointsDataHandler}/>
    </div>
}

export default addPoints;



