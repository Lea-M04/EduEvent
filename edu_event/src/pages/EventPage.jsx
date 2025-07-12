import { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import FilterBar from '../components/FilterBar';
import EventMap from '../components/EventMap';
import { useAuth } from '../context/authContext';
import '../assets/css/styles.css'; 

function EventPage() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  const handleFilter = async (interestsOverride) => {
    if (!user) return;

    try {
      const res = await axios.post('http://localhost:5000/api/events/filter', {
        field: user.field,
        interests: interestsOverride.length > 0 ? interestsOverride : user.interests,
      });
      setEvents(res.data);
    } catch (err) {
      console.error("Filtering failed", err);
    }
  };

  return (
    <section className="page-section bg-light" id="events">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Events</h2>
          <h3 className="section-subheading text-muted">Discover opportunities tailored for you</h3>
        </div>

        {user && (
          <div className="text-center mb-4">
            <FilterBar onFilter={handleFilter} />
          </div>
        )}
{events.length === 0 ? (
  <p className="text-muted text-center">No events found.</p>
) : (
  <div className="row">
    {events.map(event => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex" key={event.id}>
        <EventCard event={event} />
      </div>
    ))}
  </div>
)}



        {events.length > 0 && (
          <section className="page-section" id="event-map">
            <div className="container">
              <div className="text-center mb-4">
                <h3 className="section-heading text-uppercase">Event Map</h3>
              </div>
              <EventMap events={events} />
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default EventPage;
