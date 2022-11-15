// import '../../App.css';
import solera from "./solera.svg";
import "./Header.css"


function Header(){
    

const clickHandler = event => {
        let buttonId = event.currentTarget.id;
        console.log(buttonId);
    }
return ( 
    <div className="headerDiv">
    <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
    <h1>Solera Teams Scores</h1>
    <div className="sideButtonsDiv">
    <button onClick={clickHandler} id="addGroup" className="sideButtons"> Group </button>
    <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Assignment </button>
    <button onClick={clickHandler} id="addPoints" className="sideButtons"> Points </button>
    </div>
  </div>);

    
}




export default Header;