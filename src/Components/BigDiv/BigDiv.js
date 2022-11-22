import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import GroupDetails from '../GroupDetails/GroupDetails';
import Group from '../Group/Group';
import './BigDiv.css';

import Popup from '../Popup/Popup';

let groupList = [];
let idNumber;

export default function BigDiv() {

  const [isShown, setIsShown] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    (async function () {
      try {
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
    })();
  }, []);

  const handleClick = event => {
    setButtonPopup(true);
    setIsShown(current => !current);
    idNumber = parseInt(event.currentTarget.id);
    const groupDetail = {
      id: event.currentTarget.id,
      name: event.currentTarget.name,
      points: event.currentTarget.points,
      tasks: event.currentTarget.assignmentList,
    };
  };


  return (
    <>
      <div className="BigDiv" id="BigDiv">
        {groupList.map((groupList) =>
        (<button onClick={handleClick} id={groupList.id} key={groupList.id}>
          {console.log(groupList)}
          <Group
            key={groupList.id}
            name={groupList.name}
            points={groupList.points}
            //assignment={}
            total={groupList.assignmentList.length}
          /></button>
        ))}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id={Popup}>
        <GroupDetails
          key={groupList[idNumber - 1]?.id}
          name={groupList[idNumber - 1]?.name}
          points={groupList[idNumber - 1]?.points}
          tasks={groupList[idNumber - 1]?.tasks}
        />
      </Popup>

    </>
  )
}


// <GroupDetails
//           key={groupList[idNumber - 1]?.id}
//           name={groupList[idNumber - 1]?.name}
//           points={groupList[idNumber - 1]?.points}
//           task={groupList[idNumber - 1]?.tasks}
//           taskScore={groupList[idNumber - 1]?.score}
//           isDone={groupList[idNumber - 1]?.isDone}
//         />