import React from 'react';
import AddEventForm from '../components/AddEventForm';
import { useAuth } from '../context/authContext';

const AddEventPage = () => {
  const { user } = useAuth(); // ✅ thjesht thirre si hook

  if (!user || user.username !== 'admin') {
    return <p>🚫 Nuk ke qasje në këtë faqe.</p>;
  }

  return (
    <div>
      <h2>Shto Event të Ri</h2>
      <AddEventForm />
    </div>
  );
};

export default AddEventPage;
