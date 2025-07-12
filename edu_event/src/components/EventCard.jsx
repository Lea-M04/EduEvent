function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Field:</strong> {event.field}</p>
      <p><strong>Tags:</strong> {event.tags.join(', ')}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
}

export default EventCard;
