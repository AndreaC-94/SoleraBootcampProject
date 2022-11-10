import "./Group.css";

const Group = (props) => {

    const groupName = props.name
    const points = props.points
    const assignmentCompleted = props.assignment

    return <div>
            <div id="name" name="name" >{groupName}</div>
            <div id="points" name="points" >{points}</div>
            <div id="assignments" name="assignments" >{assignmentCompleted}/total</div>
        </div>
}

export default Group;