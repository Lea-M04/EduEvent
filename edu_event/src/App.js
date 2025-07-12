import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import Navbar from './components/Navbar';
import NetworkingPage from './pages/NetworkingPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import ChatBot from './components/ChatBot';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> 
       <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

 
  <Route path="/events" element={
    <PrivateRoute>
      <EventPage />
    </PrivateRoute>
  } />
  <Route path="/networking" element={
    <PrivateRoute>
      <NetworkingPage />
    </PrivateRoute>
  } />
  <Route path="/profile" element={
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  } />
</Routes>
 <ChatBot />
      </Router>
    </AuthProvider>
  );
}

export default App;
