import "./GroupDetails.css";

const GroupDetails = (props) => {

    const groupName = props.name
    const points = props.points
    const tasks = props.task
    const taskScore = props.taskScore
    const isDone = props.isDone
    let changes;
 

    const listItems = tasks.map((task) =>  
    <div className="insideDiv">
    {task}
    </div>);
  
  const listItems2 = taskScore.map((score) =>
    <div className="insideDiv">
    {score}
    </div>);
  const listItems3 = isDone.map((done) =>
    <div className="insideDiv">
      {changes = done}
    <form>
              <input type="checkbox" value={listItems} id="subscribe" checked={changes}></input>
    </form>
    </div>);

 


    return <form>
        <div className="textDiv">
          <div className="labelDiv">{groupName} has {points} Points!</div>
            <div className="DetailsDiv">
            <div className="DetailsDiv__list">{listItems}</div>
            <div className="DetailsDiv__points">{listItems2}</div>
            <div className="DetailsDiv__check"> <div className="DetailsDiv__check__DB">{listItems3}</div><div className="DetailsDiv__check__change"></div></div>
            </div>
            <button type="submit">Add Assignments</button>
        </div>
    </form>;
}

export default GroupDetails;