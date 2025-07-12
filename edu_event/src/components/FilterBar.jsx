import { useState } from 'react';

function FilterBar({ onFilter }) {
  const [customInterests, setCustomInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestsArray = customInterests
      .split(',')
      .map(i => i.trim())
      .filter(i => i.length > 0);
    onFilter(interestsArray);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-bar">
      <input
        type="text"
        placeholder="Filter by interests (comma separated)"
        value={customInterests}
        onChange={(e) => setCustomInterests(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
}

export default FilterBar;
