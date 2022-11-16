import React, { useState } from 'react'
import Header from '../Header/Header';
import GroupDetails from '../GroupDetails/GroupDetails';
import Group from '../Group/Group';
import './BigDiv.css';

import Popup from '../Popup/Popup';


let groupList = [];
let idNumber;


async function call() {
  try {
    const response = await fetch('assets/data.json');
    console.log(response, "response");
    groupList = await response.json();
  } catch (error) {
    console.log('ocorreu um erro')
  }
}

call();

console.log(groupList, " groupList");

//get tasks from first group of groupList
// const task1 = groupList[0].tasks;
const task1 = ["HTML", "React", "JS", "c++"];

//get score from first group of groupList
// const tasksScore1 = groupList[0].score;
const tasksScore1 = [11, 22, 33, 41];

const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];

// let groupList = [
//   { id: 1, name: 'Group 1', points: '100', assignment: '5', tasks: task1, score: tasksScore1 },
//   { id: 2, name: 'Group 2', points: '150', assignment: '8', tasks: task2, score: tasksScore2 },
//   { id: 3, name: 'Group 3', points: '130', assignment: '6', tasks: task3, score: tasksScore3 },
//   { id: 4, name: 'Group 4', points: '95', assignment: '3', tasks: task4, score: tasksScore4 },
//   { id: 5, name: 'Group 3', points: '130', assignment: '6', tasks: task3, score: tasksScore3 },
//   { id: 6, name: 'Group 3', points: '130', assignment: '6', tasks: task3, score: tasksScore3 }];






export default function BigDiv() {

  const [isShown, setIsShown] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = event => {
    setButtonPopup(true);
    setIsShown(current => !current);
    idNumber = parseInt(event.currentTarget.id);
    const groupDetail = {
      id: event.currentTarget.id,
      name: event.currentTarget.name,
      points: event.currentTarget.points,
      tasks: { task1 },
      taskScore: { tasksScore1 }
    };
  };

  return (
    <>
      <div className="BigDiv" id="BigDiv">

        {groupList.map((groupList) =>
        (<button onClick={handleClick} id={groupList.id} key={groupList.id}>
          <Group
            key={groupList.id}
            name={groupList.name}
            points={groupList.points}
            assignment={groupList.assignment}
          /></button>
        ))}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id={Popup}>
        <GroupDetails
          key={groupList[idNumber - 1]?.id}
          name={groupList[idNumber - 1]?.name}
          points={groupList[idNumber - 1]?.points}
          task={groupList[idNumber - 1]?.tasks}
          taskScore={groupList[idNumber - 1]?.score}
        />
      </Popup>

    </>
  )
}
