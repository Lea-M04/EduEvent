import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm'; // për ngjyrat hint dhe .gradient-custom

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
    <><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <section className="vh-100 gradient-custom d-flex align-items-center justify-content-center" style={{backgroundColor: 'white' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card bg-dark text-white shadow" style={{ borderRadius: '1rem', borderColor: 'white' }}>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50">Create your account to get started</p>
                  </div>

                  <div className="form-outline form-white mb-3">
                    <label className="form-label" style={{color:'white'}}>Username</label>
                    <input
                      className="form-control form-control-lg"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline form-white mb-3">
                    <label className="form-label" style={{color:'white'}}>Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline form-white mb-3">
                    <label className="form-label" style={{color:'white'}}>First Name</label>
                    <input
                      className="form-control form-control-lg"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline form-white mb-3">
                    <label className="form-label" style={{color:'white'}}>Last Name</label>
                    <input
                      className="form-control form-control-lg"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline form-white mb-3">
                    <label className="form-label" style={{color:'white'}}>Field (e.g., Computer Science)</label>
                    <input
                      className="form-control form-control-lg"
                      name="field"
                      value={formData.field}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label" style={{color:'white'}}>Interests</label>
                    <input
                      className="form-control form-control-lg"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-outline-light btn-lg">Register</button>
                  </div>

                  <p className="mt-4 mb-0 text-center text-white-50">
                    Already have an account? <a href="/login" className="fw-bold text-white-50">Login</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br></br><br></br><br></br><br></br><br></br>
    </>
  );
};

export default RegisterForm;
