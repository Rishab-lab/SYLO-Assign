
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from a library like react-icons

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '30rem', padding: '8px', marginTop:'15px', marginBottom:'10px'}}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for venues"
        style={{ flex: 1, border: 'none', outline: 'none', marginRight: '8px' }}
      />
      <button onClick={handleSearch} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
        <FaSearch size={20} color="#333" />
      </button>
    </div>
  );
};

export default SearchBar;
