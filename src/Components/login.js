import React from "react";
const login = () => {
  return (
    <div>
      <form name="git-form">
        <label>Git UserName:</label>
        <input
          type="text"
          maxLength="50"
          autoComplete="off"
          name="user-name"
          required
        ></input>
      </form>
    </div>
  );
};

export default login;
