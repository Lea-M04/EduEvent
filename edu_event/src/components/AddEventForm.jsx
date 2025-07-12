import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/styles.css'; // sigurohu që kjo është importuar

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
    <div className="form-wrapper bg-dark text-white p-5 rounded shadow mx-auto" style={{ maxWidth: "600px", marginTop: "100px" }}>
      <h3 className="text-center mb-4">Add Event</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="field" value={formData.field} onChange={handleChange} placeholder="Field" required />
        </div>
        <div className="mb-4">
          <input className="form-control" type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
