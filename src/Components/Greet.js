function Greet() {
  return (
    <div class="header">
      <div class="fav-logo__title">
        <img src="./emumbaLogo.png" alt="Image not preview" id="fav-logo" />
        <h1 id="first-title">Emumba</h1>
      </div>
      <div>
        <input
          type="text"
          id="search-box"
          placeHolder="Search Git..."
          required
        ></input>
        <button id="search-btn">
          <li class="fa fa-search"></li>
        </button>
      </div>
    </div>
  );
}

export default Greet;
