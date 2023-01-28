import "./App.css";
import BallotPage from "./Pages/BallorPage";

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <div className="parent-container">
        <div className="">
          <h1 className="App-heading">Movie Awards 2021</h1>
        </div>
        <div className="Ballot-component">
          <BallotPage />
        </div>
      </div>
    </div>
  );
}
export default App;
