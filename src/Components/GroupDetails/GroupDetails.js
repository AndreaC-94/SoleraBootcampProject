import "./GroupDetails.css";

const GroupDetails = (props) => {

    const groupName = props.names
    const points = props.pointss
    const tasks = props.tasks
    const tasksScores = props.tasksScores
 
    const listItems = tasks.map((task) =>  
    <div>
      <li>{task}</li>
    </div>);
  
  const listItems2 = tasksScores.map((score) =>
    <div>
      <li>{score}</li>
    </div>);


    return <div>
            <div>
            <span>{groupName} </span>
            <span>{points} Points</span>
            </div>
            <ul>{listItems}</ul>
            <ul>{listItems2}</ul>
        </div>
}

export default GroupDetails;