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
    <div className="event-card" style={{border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Field:</strong> {event.field}</p>
      <p><strong>Tags:</strong> {event.tags.join(', ')}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>

      {!hasApplied && user && (
        <button onClick={handleApply} style={{ marginTop: '0.5rem' }}>
          Apply to this event
        </button>
      )}

      {hasApplied && (
        <p style={{ marginTop: '0.5rem', color: 'green' }}>You have applied to this event</p>
      )}

      {eventApplicants.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Applied Users:</strong>
          <ul>
            {eventApplicants.map(u => (
              <li key={u.id}>
                {u.first_name} {u.last_name || ''}{' '}
                {user?.id !== u.id && (
                  <button onClick={() => handleConnect(u)} style={{ marginLeft: '0.5rem' }}>
                    Connect
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventCard;
