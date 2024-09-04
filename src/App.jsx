import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import Home from './Pages/Home';
import Save from './Pages/Save';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
