import "./App.css";
import Header from "./Components/Header";
import "./Components/greet.css";
import "./Components/CustomButton/CustomButton.css";
import Make from "./Components/Make";
import Login from "./Components/Login";

import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Make />
    </div>
  );
}

export default App;
