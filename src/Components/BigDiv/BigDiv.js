import React, { useState } from 'react'
import GroupCard from '../Group/GroupCard';
import Header from '../Header/Header';
import NewGroup from '../NewGroup/NewGroup.js';
import AddPoints from '../AddPoints/AddPoints.js';
import GroupDetails from '../GroupDetails/GroupDetails';
import Group from '../Group/Group';
import '../../App.css';


const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
let idNumber

export default function BigDiv() {

  const clickHandler = () => {

  }

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
    idNumber = event.currentTarget.id;
  };

  const addGroupHandler = (group) => {
    console.log(group)
  }

  const grupo =[
    {name: 'Group 1', points: '100', assignment:'5'},
    {name: 'Group 2', points: '150', assignment:'8'},
    {name: 'Group 3', points: '130', assignment:'6'},
    {name: 'Group 4', points: '95', assignment:'3'}];

  return (
    <>
      <div className="App" id="App">
        <Header />
        <div className="BigDiv" id="BigDiv">
      
      <button onClick={handleClick} id="1"><Group name={grupo[0].name} points={grupo[0].points} assignment={grupo[0].assignment}></Group></button>
      <button onClick={handleClick} id="2"><Group name={grupo[1].name} points={grupo[1].points} assignment={grupo[1].assignment}></Group></button>
      <button onClick={handleClick} id="3"><Group name={grupo[2].name} points={grupo[2].points} assignment={grupo[2].assignment}></Group></button>
      <button onClick={handleClick} id="4"><Group name={grupo[3].name} points={grupo[3].points} assignment={grupo[3].assignment}></Group></button>
    
      </div> 

        <div className="ResultsDiv" id="Results">
          <NewGroup onAddGroup={addGroupHandler} />
          <AddPoints />
          {isShown && (
            <div className="ResultsDiv" id="Details">
              {(() => {
                { console.log(idNumber) }
                if (idNumber === "1") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 1" pointss="95" tasks={task1} tasksScores={tasksScore1} /></div>
                  )
                } if (idNumber === "2") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 2" pointss="125" tasks={task2} tasksScores={tasksScore2} /></div>
                  )
                }
                if (idNumber === "3") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 3" pointss="59" tasks={task3} tasksScores={tasksScore3} /></div>
                  )
                }
                if (idNumber === "4") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 4" pointss="68" tasks={task4} tasksScores={tasksScore4} /></div>
                  )
                }
              })()}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
