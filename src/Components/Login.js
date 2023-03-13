import { Button, Input } from "antd";
import CustomButton from "./CustomButton/CustomButton";

const Login = () => {
  const loginHandler = () => {
    console.log("click");
  };

  return (
    <div className="login-form__visibilty">
      <form name="gitForm">
        <div id="login-form">
          <label id="label-name">UserName:</label>
          <input
            type="text"
            placeholder="📧 Enter Email"
            autoComplete="off"
            name="userName"
            id="input-field"
            required
          ></input>
          <label id="label-name">Password: </label>
          <input
            type="password"
            placeholder="🔒 Enter Password"
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
