import Group from "./Group"
const GroupCard = (props) => {



    /* Some button handler to display group info */
    const showGroupInfo = () => {
        return <div>
            <h1>{props.name}</h1>
            <h2>{props.points}</h2>
            <h3>{props.assignment}</h3>
            {/*<DisplayAssignmentsList></DisplayAssignmentsList>*/}
            
        </div>
    }

    return(
            <Group name={props.name} points={props.points} assignment={props.assignment}/>
    )
}
export default GroupCard