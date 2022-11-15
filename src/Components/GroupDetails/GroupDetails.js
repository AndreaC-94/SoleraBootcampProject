

const GroupDetails = (props) => {

    const groupName = props.names
    const points = props.pointss
    const tasks = props.tasks
    const tasksScores = props.tasksScores
 
    const listItems = tasks.map((task) =>
    
    <div class='child'><li>{task}</li>
    </div>
  );
  
  const listItems2 = tasksScores.map((score) =>
  <div class='child'><li>{score}</li></div>
  
);


    return <div>
            <h1>Solera Teams</h1>
            <span>{groupName} </span>
            <span>{points} Points</span>
            
            <ul>{listItems}</ul>
            <ul>{listItems2}</ul>
            

           
    
        </div>
}

export default GroupDetails;