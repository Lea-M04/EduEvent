import React from 'react';
import NetworkingList from '../components/NetworkingList';
import '../assets/css/networking.css'; 

const NetworkingPage = () => {
  return (
    <div className="networking-page">
      <div className="networking-header">
        <h1>Connect with Students</h1>
        <p>
          Explore like-minded students who have applied to events. Discover new connections, share ideas,
          and grow your professional network. Click <strong>View</strong> to learn more about each participant.
        </p>
      </div>

      <NetworkingList />
    </div>
  );
};

export default NetworkingPage;
