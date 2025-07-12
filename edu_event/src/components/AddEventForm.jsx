import React, { useState } from 'react';
import axios from 'axios';

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    city: "",
    location: "",
    field: "",
    tags: ""
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   
  const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    tags: formData.tags.split(",").map(tag => tag.trim())
  };

  try {
    const res = await axios.post('http://localhost:5000/api/events', dataToSend);
    alert('Eventi u shtua me sukses!');
    console.log('Eventi u regjistrua:', res.data);
  } catch (err) {
    console.error('Gabim gjatë regjistrimit të eventit:', err.response?.data || err.message);
    alert('Gabim gjatë regjistrimit!');
  }
};


  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "30px auto" }}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <input type="text" name="field" value={formData.field} onChange={handleChange} placeholder="Field" required />
      <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
