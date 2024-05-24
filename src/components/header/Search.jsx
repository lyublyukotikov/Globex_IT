import React from "react";
import SearchImg from "../../assets/search-btn.svg";

import AppContext from "../../context";

function Search() {
  const { searchValue, searchUsers, onChangeSearchInput } =
    React.useContext(AppContext);

  // Локальное состояние для отслеживания ввода
  const [inputValue, setInputValue] = React.useState(searchValue);

  // Обработчик изменения текста в инпуте
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик клика по кнопке
  const handleSearchButtonClick = () => {
    onChangeSearchInput(inputValue);
  };

  return (
    <header className="header container">
      <form className="header__search" onSubmit={(e) => e.preventDefault()}>
        <label className="visually-hidden" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className="search__input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="search__input__btn"
          onClick={handleSearchButtonClick}
          type="button"
          aria-label="Search"
        >
          <img
            className="search__input__img"
            src={SearchImg}
            alt="search"
            height={"24px"}
            width={"24px"}
          />
        </button>
      </form>
    </header>
  );
}

export default Search;
