import GroupForm from "./GroupForm"

const newGroup = (props) => {

    const saveGroupDataHandler = (enteredGroupData) => {
        const groupData = {
            ...enteredGroupData,
            id: Math.random().toString()
        }
        props.onAddGroup(groupData)
    }

    return <div>
    <GroupForm onSaveGroupData={saveGroupDataHandler}/>
    </div>
}

export default newGroup;