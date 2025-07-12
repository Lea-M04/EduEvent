import React from 'react';
import AddEventForm from '../components/AddEventForm';
import { useAuth } from '../context/authContext';

const AddEventPage = () => {
  const { user } = useAuth();

  if (!user || user.username !== 'admin') {
    return <p> Nuk ke qasje në këtë faqe.</p>;
  }

  return (
    <div>
      <AddEventForm />
    </div>
  );
};

export default AddEventPage;
