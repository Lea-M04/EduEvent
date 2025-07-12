import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    field: '',
    interests: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
      interests: formData.interests.split(',').map(item => item.trim())
    };

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', userData);
      alert('Regjistrimi u krye me sukses!');
      console.log('User u regjistrua:', res.data);
    } catch (err) {
      console.error('Gabim gjatë regjistrimit:', err.response?.data || err.message);
      alert('Gabim gjatë regjistrimit!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" value={formData.username} onChange={handleChange} required />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>

      <div>
        <label>First Name:</label>
        <input name="first_name" value={formData.first_name} onChange={handleChange} required />
      </div>

      <div>
        <label>Last Name:</label>
        <input name="last_name" value={formData.last_name} onChange={handleChange} required />
      </div>

      <div>
        <label>Field (e.g., Computer Science):</label>
        <input name="field" value={formData.field} onChange={handleChange} required />
      </div>

      <div>
        <label>Interests (ndaji me presje):</label>
        <input name="interests" value={formData.interests} onChange={handleChange} placeholder="p.sh. AI, Web, Hackathons" />
      </div>

      <button type="submit">Regjistrohu</button>
    </form>
  );
};

export default RegisterForm;
