
import React from 'react';

function SearchBar({ setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Employees"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
