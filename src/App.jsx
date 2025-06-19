import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './Homepage';
import Bookings from './Bookings';
import Pricing from './Pricing';
import Location from './Location';
import Contact from './Contact';

function App() {

  return (
    <>
      <Router basename='/elisasnails'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
