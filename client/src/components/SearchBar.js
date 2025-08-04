import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search notes..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
    />
  );
}

export default SearchBar;