import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useAuth } from '../context/authContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>EventScanner</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        {user && <li><Link to="/networking">Networking</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/register">Register</Link></li>}
        {user && <li onClick={logout} style={{ cursor: 'pointer' }}>Logout</li>}
        {user && <span style={{ marginLeft: '1rem' }}>Hi, {user.username} 👋</span>}
      </ul>

      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
