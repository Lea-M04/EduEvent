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
import AddEventPage from './pages/AddEventPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from './components/Footer';


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
  <Route path="/add-event" element={
  <PrivateRoute>
    <AddEventPage />
  </PrivateRoute>
} />
</Routes>
 <ChatBot />
  <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
