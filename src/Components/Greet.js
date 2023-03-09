function Greet() {
  return (
    <div class="header">
      <div class="fav-logo__title">
        <img src="./emumbaLogo.png" alt="Image not preview" id="fav-logo" />
        <h1 id="first-title">Emumba</h1>
      </div>
      <div class="search-box__login">
        <form action="https://gist.github.com/" method="GET">
          <div class="search-form__btn">
            <input
              type="search"
              id="search-box"
              placeHolder="Search Name..."
              autoComplete="off"
              required
            ></input>
            <button id="search-btn">
              <li class="fa fa-search"></li>
            </button>
          </div>
        </form>
        <button id="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Greet;
