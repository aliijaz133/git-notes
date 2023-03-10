import "./App.css";
import Greet from "./Components/Greet";
import "./Components/greet.css";
import Make from "./Components/Make";
import login from "./Components/login";

function App() {
  return (
    <div className="App">
      <Greet />
      <login />
      <Make />
    </div>
  );
}

export default App;
