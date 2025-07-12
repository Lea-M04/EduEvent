import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      login(res.data.user);
      navigate('/events');
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
    <br /><br /><br /><br />
      <section className="vh-100 gradient-custom d-flex align-items-center justify-content-center" style={{backgroundColor: 'white' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white shadow" style={{ borderRadius: '1rem', borderColor: 'white' }}>
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-5 text-center">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50">Please enter your username and password</p>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <a className="text-white-50 small" href="#">Forgot password?</a>
                    </div>

                    <div className="d-grid mb-4">
                      <button className="btn btn-outline-light btn-lg" type="submit">Login</button>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg mx-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg mx-2"></i></a>
                    </div>

                    <p className="mt-4 mb-0 text-center text-white-50">
                      Don’t have an account? <a href="/register" className="fw-bold text-white-50">Sign Up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
