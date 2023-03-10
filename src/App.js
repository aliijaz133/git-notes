import "./App.css";
import Greet from "./Components/Greet";
import "./Components/greet.css";
import Make from "./Components/Make";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Greet />
      <Login />
      <Make />
    </div>
  );
}

export default App;
