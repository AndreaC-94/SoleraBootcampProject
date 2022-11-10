import Group from "./Components/Group/Group";
import GroupCard from "./Components/Group/GroupCard";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";

const App = (props) => {

  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="App">
      <h1>Solera Teams</h1>
      <NewGroup />
      <div className="BigDiv">
          <GroupCard name="Group 1" points="100" assignment="2"></GroupCard>
          <GroupCard name="Group 2" points="100" assignment="2"></GroupCard>
      </div>
  </div>
}

export default App;
