import React from 'react';
import '../assets/css/networking.css';

const networkingData = [
  { id: 1, name: 'Ana K.', profession: 'Developer', date: '13/12 18' },
  { id: 2, name: 'Blerim A.', profession: 'Designer', date: '21 July' },
  { id: 3, name: 'Elira P.', profession: 'Project Manager', date: '13/3/19' },
  { id: 4, name: 'Stuart K.', profession: 'QA Engineer', date: '03/1/19' },
  { id: 5, name: 'Simply Fry', profession: 'Support', date: '2 hours ago' },
];

const NetworkingList = () => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="center-container">
        <div className="list list-row block">
          {networkingData.map(person => (
            <div className="list-item" key={person.id} data-id={person.id}>
              <div>
                <span className="avatar">{person.name.charAt(0)}</span>
              </div>
              <div className="flex">
                <span className="item-author">{person.name}</span>
                <div className="item-except">{person.profession}</div>
              </div>
              <div className="item-date">{person.date}</div>
              <div className="item-actions">
                <button className="btn-view">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkingList;
