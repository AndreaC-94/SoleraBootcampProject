// import '../../App.css';
import "./Header.css"
import solera from "../../Images/solera.svg";
import ButtonGroup from "../ButtonGroup/ButtonGroup.mjs";
import PopupButton from "../PopupButton/PopupButton.mjs"
import GroupForm from '../NewGroup/GroupForm.js';
import AddPoints from "../AddPoints/AddPoints.js";
import AddAssignmentForm from "../AddAssignment/AddAssignmentForm.js";

function Header() {
  return (
    <div className="headerDiv">
      <a href="http://www.localhost:3000">
        <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
      </a>
      <h1>Solera Teams Scores</h1>
      <ButtonGroup>
        <PopupButton buttonName="Groups" isVisible={false}><GroupForm /></PopupButton>
        <PopupButton buttonName="Assignments" isVisible={false}><AddAssignmentForm /></PopupButton>
        <PopupButton buttonName="addPoints" isVisible={false}><AddPoints /></PopupButton>
      </ButtonGroup>
    </div>);
}

export default Header;
