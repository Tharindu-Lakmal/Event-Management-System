import React from 'react';
import './App.css'
import ListEvent from './pages/ListEvent'
import EventDetail from './pages/EventDetail'
import EventCreation from './pages/EventCreation'
import EventUpdate from './pages/EventUpdate'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  

  return (
    <div className="app">

      <Navbar />
      <Routes>
        <Route path="/" element={<ListEvent />} />
        <Route path='/event-details' element={<EventDetail />} />
        <Route path='/event-detail/:id' element={<EventDetail />} />
        <Route path="/event-creation" element={<EventCreation />} />
        <Route path="/event-update" element={<EventUpdate />} />
        <Route path="/edit-event/:id" element={<EventCreation />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
