import React from "react";
// defined the search component which take in onsearch as a prop
function Search({onSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // to call the function every time i type
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;



