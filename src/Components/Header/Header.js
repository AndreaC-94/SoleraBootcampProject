// import '../../App.css';
import solera from "../../Images/solera.svg";
import "./Header.css"
import Popup from "../Popup/Popup.js";
import React, { useState } from 'react'
import NewGroup from '../NewGroup/NewGroup.js';
import AddPoints from "../AddPoints/AddPoints.js";
import AddAssignment from "../AddAssignment/AddAssignment.js";


function Header() {


    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupPoint, setButtonPopupPoint] = useState(false);
    const [buttonPopupAnotherPoint, setButtonPopupAnotherPoint] = useState(false);
    
return ( 
    <div className="headerDiv">
      <a href="http://www.localhost:3000">
        <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
      </a>
    <h1>Solera Teams Scores</h1>
    <div className="sideButtonsDiv">
    <button onClick={() => setButtonPopup(true)} id="addGroup" className="sideButtons" > Group </button>
    <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} id={Popup}>
      <NewGroup />
    </Popup>
    <button onClick={() => setButtonPopupAnotherPoint(true)} id="addAssignment" className="sideButtons"> Assignments </button>
    <Popup trigger = {buttonPopupAnotherPoint} setTrigger={setButtonPopupAnotherPoint} id={Popup}>
      <AddAssignment />
    </Popup>
    <button onClick={() => setButtonPopupPoint(true)} id="addPoints" className="sideButtons"> Points </button>
    <Popup trigger = {buttonPopupPoint} setTrigger={setButtonPopupPoint} id={Popup}>
    <AddPoints />
    </Popup>
    </div>
  </div>);


}




export default Header;