import React from 'react';
import '../assets/css/styles.css';

function EventCard({ event }) {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title text-primary">{event.title}</h5>
        <p className="card-text">{event.description}</p>
        <p className="card-text"><strong>Field:</strong> {event.field}</p>
        <p className="card-text"><strong>Tags:</strong> {event.tags.join(', ')}</p>
        <p className="card-text"><strong>Date:</strong> {event.date}</p>
        <p className="card-text"><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
  