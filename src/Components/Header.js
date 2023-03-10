import image from "./../assets/images/emumbaLogo.png";

function Header() {
  return (
    <div className="header">
      <div className="fav-logo__title">
        <img src={image} alt="Image not preview" id="fav-logo" />
        <h1 id="first-title">Emumba</h1>
      </div>
      <div className="search-box__login">
        <form action="https://gist.github.com/" method="GET">
          <div className="search-form__btn">
            <input
              type="search"
              id="search-box"
              placeholder="Search Name..."
              autoComplete="off"
              required
            ></input>
            <button id="search-btn">
              <li className="fa fa-search"></li>
            </button>
          </div>
        </form>
        <button id="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Header;
