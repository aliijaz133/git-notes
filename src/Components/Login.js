const Login = () => {
  return (
    <div class="login-form__visibilty">
      <form name="git-form">
        <div id="login-form">
          <label id="label-name__login">UserName:</label>
          <input
            type="text"
            placeholder="Enter User Name OR Email"
            autoComplete="off"
            name="user-name"
            id="input-field"
            required
          ></input>
          <label id="label-name__login">Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="user-pwd"
            id="input-field"
            required
          ></input>
        </div>
        <button id="login-btn__gists">Login</button>
      </form>
    </div>
  );
};

export default Login;
