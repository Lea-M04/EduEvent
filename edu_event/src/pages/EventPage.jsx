import { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import FilterBar from '../components/FilterBar';
import { useAuth } from '../context/authContext';
import EventMap from '../components/EventMap'; 

function EventPage() {
  const [events, setEvents] = useState([]);
  const [applied, setApplied] = useState([]);        
  const [users, setUsers] = useState([]);          
  const { user } = useAuth();

  useEffect(() => {
    fetchAllEvents();
    fetchApplied();                               
    fetchUsers();                                    
  }, []);

  const fetchAllEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  const fetchApplied = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/applied'); 
      setApplied(res.data);
    } catch (err) {
      console.error("Error fetching applied users", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');   
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
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
    <div className="container">
      <br /><br /><br /><br /><br /><br /><br />
      <h2>Events</h2>
      {user && <FilterBar onFilter={handleFilter} />}
      
      <div className="event-list">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              users={users}       
              applied={applied}  
            />
          ))
        )}
      </div>

      {events.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3> Event map</h3>
          <EventMap events={events} />
        </div>
      )}
    </div>
  );
}

export default EventPage;
