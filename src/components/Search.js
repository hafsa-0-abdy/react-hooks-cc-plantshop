import React from "react";

function Search({ onSearchChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search plants..."
        onChange={(e) => onSearchChange(e.target.value)} 
      />
    </div>
  );
}

export default Search;
