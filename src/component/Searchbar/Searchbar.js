import PropTypes from "prop-types";
import { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onInput = (e) => {
    setSearchQuery(e.currentTarget.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return alert("Please, enter search query");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={onInput}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
