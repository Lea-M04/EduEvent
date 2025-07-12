import React, { useState } from 'react';
import '../assets/css/styles.css';
function FilterBar({ onFilter }) {
  const [input, setInput] = useState('');

  const handleFilter = () => {
    const interests = input.split(',').map(tag => tag.trim());
    onFilter(interests);
  };

  return (
    <div className="filterbar-container">
      <input
        type="text"
        placeholder="Type interests (e.g. AI, Design)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="filter-input"
      />
      <button onClick={handleFilter} className="filter-button">
        Filter
      </button>
    </div>
  );
}

export default FilterBar;
