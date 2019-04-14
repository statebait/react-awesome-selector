import React from "react";

const SearchBar = props => {
  return (
    <input
      type="text"
      className="form-control"
      style={{ width: 200 }}
      onChange={props.onSearch}
      placeholder="Search"
    />
  );
};

export default SearchBar;
