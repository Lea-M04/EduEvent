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
import Footer from './components/Footer';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* ✅ Tash është brenda <Router> */}
       <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

  {/* 🔐 Mbrohet: duhet me qenë i kyçur për me i pa këto */}
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
