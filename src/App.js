import "./App.css";
import BigDiv from "./Components/BigDiv/BigDiv";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <div className="App" id="App">
        <Header />
        <BigDiv />
      </div>
    </>
  );
}
export default App;