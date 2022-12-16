import React from "react";
import PropTypes from "prop-types";

export const Search = (props) => {
  const { keyword, setKeyword, findBooks } = props;

  function handleChange(e) {
    setKeyword(e.target.value);
    console.log(e);
  }

  function onSubmit(event) {
    event.preventDefault();
    findBooks(keyword);
  }
  return (
    <form>
      <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input type="text" value={keyword} onChange={handleChange} />
      <button type="submit" onClick={onSubmit}>
        Find
      </button>
    </form>
  );
};

Search.propTypes = {
  keyword: PropTypes.string,
  setKeyword: PropTypes.func,
  findBooks: PropTypes.func,
};
