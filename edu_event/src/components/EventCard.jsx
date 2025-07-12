import React from 'react';
import '../assets/css/styles.css';

function EventCard({ event }) {
  return (
    <div className="event-card-custom h-100 d-flex flex-column justify-content-between">
      <div>
        <div className="event-card-header text-white text-center">
          <h5 className="mb-0">{event.title}</h5>
        </div>
        <div className="card-body px-3 py-4 text-center">
          <p className="card-text text-muted">{event.description}</p>

          <ul className="list-unstyled text-start mt-4 small">
            <li><strong>📘 Field:</strong> {event.field}</li>
            <li><strong>🏷️ Tags:</strong> {event.tags.join(', ')}</li>
            <li><strong>📅 Date:</strong> {new Date(event.date).toLocaleDateString()}</li>
            <li><strong>📍 Location:</strong> {event.city} – {event.location}</li>
          </ul>
        </div>
      </div>

      <div className="text-center pb-3">
        <button className="btn btn-sm btn-outline-primary rounded-pill px-4">More Info</button>
      </div>
    </div>
  );
}

export default EventCard;
