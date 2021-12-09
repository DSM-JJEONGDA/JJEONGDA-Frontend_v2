import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Calendar from './pages/calendarPage';
import Diary from './pages/diary';
import Main from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
