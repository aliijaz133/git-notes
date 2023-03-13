import { Button, Input } from "antd";
import CustomButton from "./CustomButton/CustomButton";

const Login = () => {
  const getText = document.forms["gitForm"]["userName"].value;
  const getPwd = document.forms["gitForm"]["userName"].value;
  const loginHandler = () => {
    if (getText == "" || getPwd == "") {
      alert("This field is required.");
      return false;
    } else {
      alert("Succesfully loggedin.");
      return true;
    }
  };

  return (
    <div className="login-form__visibilty">
      <form name="gitForm">
        <div id="login-form">
          <label id="label-name__login">UserName:</label>
          <input
            type="text"
            placeholder="Enter User Name OR Email"
            autoComplete="off"
            name="userName"
            id="input-field"
            required
          ></input>
          <label id="label-name__login">Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="userPwd"
            id="input-field"
            required
          ></input>
        </div>
        {/* <button id="login-btn__gists" onClick={loginHandler}>
          Login
        </button> */}
        <CustomButton title={"Login"} onClick={loginHandler} />
      </form>
    </div>
  );
};

export default Login;
