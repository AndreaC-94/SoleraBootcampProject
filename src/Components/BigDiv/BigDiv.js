import React, { useState } from 'react'
import Header from '../Header/Header';
import GroupDetails from '../GroupDetails/GroupDetails';
import Group from '../Group/Group';
import './BigDiv.css';

import Popup from '../Popup/Popup';


let groupList = [];

// console.log(groupList, " groupList");


let idNumber;


//get tasks from first group of groupList
// const task1 = groupList[0].tasks;
const task1 = ["HTML", "React", "JS", "c++"];

//get score from first group of groupList
// const tasksScore1 = groupList[0].score;
const tasksScore1 = [11, 22, 33, 41];

const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const taskIsDone2 = [true, true, true, true,];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const taskIsDone3 = [false, false, true, true];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
const taskIsDone4 = [false, false, false, false];

// let idNumber;
// let groupList =[
//   {id: 1, name: 'Group 1', points: '100', assignment:'5', tasks:task1, score:tasksScore1, isDone:taskIsDone1},
//   {id: 2, name: 'Group 2', points: '150', assignment:'8', tasks:task2, score:tasksScore2,isDone:taskIsDone2},
//   {id: 3, name: 'Group 3', points: '130', assignment:'6', tasks:task3, score:tasksScore3,isDone:taskIsDone3},
//   {id: 4, name: 'Group 4', points: '95', assignment:'3', tasks:task4, score:tasksScore4,isDone:taskIsDone4},
//   {id: 5, name: 'Group 3', points: '130', assignment:'6', tasks:task3, score:tasksScore3,isDone:taskIsDone3},
//   {id: 6, name: 'Group 3', points: '130', assignment:'6', tasks:task3, score:tasksScore3,isDone:taskIsDone3}];

export default function BigDiv() {

  const [isShown, setIsShown] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [groupList, setGroupList] = useState([]);

  async function call() {
    try {
      //path to data.json file in public folder
      // const response = await fetch('data.json');
      const response = await fetch('http://localhost:8081/getAll', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const groups = await response.json();
      setGroupList(groups);
    } catch (error) {
      console.log('Error with fetching data!', error);
    }
  }

  call();


  const handleClick = event => {
    setButtonPopup(true);
    setIsShown(current => !current);
    idNumber = parseInt(event.currentTarget.id);
    const groupDetail = {
      id: event.currentTarget.id,
      name: event.currentTarget.name,
      points: event.currentTarget.points,
      tasks: event.currentTarget.tasks,
      taskScore: event.currentTarget.score,
      isDone: event.currentTarget.isDone
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
            assignment={groupList.assignmentList}
            total={groupList.assignmentList.length}
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
          isDone={groupList[idNumber - 1]?.isDone}
        />
      </Popup>

    </>
  )
}
