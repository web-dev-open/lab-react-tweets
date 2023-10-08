import "./App.css";
import Tweet from "./components/Tweet";
import jsonData from "./data.json";

function App() {
  return (
    <div className="App">
      <Tweet tweets={jsonData} />
    </div>
  );
}

export default App;
