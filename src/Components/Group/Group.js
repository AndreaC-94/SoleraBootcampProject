import "./Group.css";

const Group = (props) => {

    const groupName = props.name
    const points = props.points
    const assignmentCompleted = props.assignment

    return <div>
            <div id="name">{groupName}</div>
            <div id="points">{points}</div>
            <div id="assignments">{assignmentCompleted}/10</div>
        </div>
}

export default Group;