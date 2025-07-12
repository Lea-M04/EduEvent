import React from 'react';

const networkingData = [
  { id: 1, name: 'Ana', profession: 'Developer' },
  { id: 2, name: 'Blerim', profession: 'Designer' },
  { id: 3, name: 'Elira', profession: 'Project Manager' },
];

const NetworkingList = () => {
  return (
    <div>
      <h2>Networking List</h2>
      <ul>
        {networkingData.map(person => (
          <li key={person.id}>
            <strong>{person.name}</strong> - {person.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetworkingList;
