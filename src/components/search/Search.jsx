import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import './Search.css';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
