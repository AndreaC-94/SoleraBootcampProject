import AddAssignmentForm from "./AddAssignmentForm"


const addAssignment = (props) => {
     const saveAddAssignmentDataHandler = (enteredAddAssignmentData) =>{
         const addAssignment = {
            ...enteredAddAssignmentData,
            taskIsDone: false,
            id:Math.random().toString()
         }
         props.onAddAssignment(addAssignment)
     }
   
    return <div>
        <AddAssignmentForm onSaveAddAssignmentData = {saveAddAssignmentDataHandler}/>
    </div>
}

export default addAssignment;
