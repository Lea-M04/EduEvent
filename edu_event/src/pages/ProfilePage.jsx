import React from 'react';

const ProfilePage = () => {
  // Shembull i të dhënave të përdoruesit
  const user = {
    name: 'Ana Kajtazi',
    email: 'ana@example.com',
    profession: 'Frontend Developer',
  };

  return (
    <div>
      <h1>Profili im</h1>
      <p><strong>Emri:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Profesioni:</strong> {user.profession}</p>
    </div>
  );
};

export default ProfilePage;
