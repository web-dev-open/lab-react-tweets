import "./App.css";
import Tweet from "./components/Tweet";
import jsonData from "./data.json";

function App() {
  return (
    <div className="App">
      <Tweet tweet={jsonData[0]} />
    </div>
  );
}

export default App;
