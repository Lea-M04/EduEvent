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
    <br></br><br /><br /><br /><br /><br />
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="Username" />
      <input name="password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    </>
  );
}

export default LoginForm;
