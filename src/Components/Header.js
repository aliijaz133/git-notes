import { DatePicker } from "antd";
import image from "./../assets/images/emumbaLogo.png";

function Header() {
  const searchUser = () => {
    console.log("Search User");
  };
  return (
    <div className="header">
      <div className="fav-logo__title">
        <img src={image} alt="Image not preview" id="fav-logo" />
        <h1 id="first-title">MUMBA</h1>
      </div>
      <div className="search-box__login">
        <form>
          <div className="search-form__btn">
            <input
              type="search"
              id="search-box"
              placeholder="Search Name..."
              autoComplete="off"
              required
            ></input>
            <button id="search-btn" onClick={searchUser}>
              <li className="fa fa-search"></li>
            </button>
          </div>
        </form>
        <button id="login-btn">Login</button>
      </div>
      <p id="showText"></p>
    </div>
  );
}

export default Header;
