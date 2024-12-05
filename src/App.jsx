import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <Column state={"a"} />
      <Column state={"b"} />
      <Column state={"c"} />
    </div>
  );
}

export default App;
