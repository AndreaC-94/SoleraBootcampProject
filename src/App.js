import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";
import solera from "./solera.svg";
import GroupDetails from "./Components/GroupDetails/GroupDetails";
import {useState} from 'react';

const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
let idNumber

const App = (props) => {

  const newGroupShowing = "hidden";
  const clickAddGroupHandler = () => {
    newGroupShowing = "";
  }
  const clickHandler = () => {
    
  }

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    idNumber=event.currentTarget.id;
    // console.log(idNumber);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return <div className="App" id="App">
      <h1>Solera Teams Scores</h1>
      <img src={solera} alt="solera logo" id="solera" height="240" width="300"></img>
      <div id="sideButtons">
        <button onClick={clickAddGroupHandler} id="addGroup" name="Add Group"> Group </button>
        <button onClick={clickHandler} id="addAssignment" name="Add Assignment"> Assignment </button>
        <button onClick={clickHandler} id="addAssignment" name="Add Extra Points"> Points </button>
      </div>
      <div className="BigDiv" id="BigDiv">
        <GroupCard id="1" name="Group 1" points="100" assignment="2"></GroupCard>
        <GroupCard id="2" name="Group 2" points="100" assignment="2"></GroupCard>
        <GroupCard id="3" name="Group 3" points="100" assignment="2"></GroupCard>
        <GroupCard id="4" name="Group 4" points="100" assignment="2"></GroupCard>
        <NewGroup />
        <AddPoints />
      </div>
      {/* 👇️ show elements on click */}
  
    {isShown && (
    <div>
    <div>Groups Details</div>
   
  
      
      {(() => {
        {console.log(idNumber)}
        if (idNumber=="1") {
          return (
            <div><GroupDetails names="Group 1" pointss="95" tasks={task1} tasksScores = {tasksScore1} /></div>
          )
        }  if (idNumber==2) {
          return (
            <div><GroupDetails names="Group 2" pointss="125" tasks={task2} tasksScores = {tasksScore2} /></div>
          )
        }
        if (idNumber==3) {
          return (
            <div><GroupDetails names="Group 3" pointss="59" tasks={task3} tasksScores = {tasksScore3} /></div>
          )
        }
        if (idNumber==4) {
          return (
            <div><GroupDetails names="Group 4" pointss="68" tasks={task4} tasksScores = {tasksScore4} /></div>
          )
        }
      })()}
  </div>
)}

{/* 👇️ show component on click */}
{isShown}
  </div>
}

import BigDiv from "./Components/BigDiv/BigDiv";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BigDiv />
    </>
  );
}
export default App;
