import Group from "./Group"
function GroupCard(props) {

    function showGroupInfo(name, points, assignment) {
        return <div>
            <h1>{name}</h1>
            <h2>{points}</h2>
            <h3>{assignment}</h3>
            {/*<DisplayAssignmentsList></DisplayAssignmentsList>*/}
            
        </div>
    }

    return(
        <button onClick={showGroupInfo(props.name, props.points, props.assignment)}>
            <Group name={props.name} points={props.points} assignment={props.assignment}/>
        </button>
    )
}
export default GroupCard