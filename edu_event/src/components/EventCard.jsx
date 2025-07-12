
import '../assets/css/styles.css';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import axios from 'axios';

function EventCard({ event, users = [], applied = [] }) {
  const { user } = useAuth();

  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (!user) {
      setHasApplied(false);
      return;
    }
    const appliedAlready = applied.some(a => a.userId === user.id && a.eventId === event.id);
    setHasApplied(appliedAlready);
  }, [applied, user, event.id]);

  const eventApplicants = applied
    .filter(a => a.eventId === event.id)
    .map(a => users.find(u => u.id === a.userId))
    .filter(Boolean);

  const handleApply = async () => {
    try {
      await axios.post('http://localhost:5000/api/applied', {
        userId: user.id,
        eventId: event.id,
      });
      alert('Applied successfully');
      setHasApplied(true);
    } catch (err) {
      alert(err.response?.data?.message || 'Apply failed');
    }
  };

  const handleConnect = async (otherUser) => {
    try {
      await axios.post('http://localhost:5000/api/connections', {
        fromUserId: user.id,
        toUserId: otherUser.id,
      });
      alert(`Connected with ${otherUser.username}`);
    } catch (err) {
      alert(err.response?.data?.message || 'Already connected or failed');
    }
  };

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
  