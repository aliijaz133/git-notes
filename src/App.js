import "./App.css";
import Header from "./Components/Header";
import "./Components/greet.css";
import "./Components/CustomButton/CustomButton.css";
import Make from "./Components/Make";
import Login from "./Components/Login";
import CreateGist from "./Components/CreateGist";
import SetData from "./Components/SetData";

import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Make />
      <CreateGist />
      <SetData />
    </div>
  );
}

export default App;
