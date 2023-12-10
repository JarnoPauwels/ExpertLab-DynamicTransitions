// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Basketball from './components/Basketball';
import Tennis from './components/Tennis';
import Football from './components/Football';
import AmericanFootball from './components/AmericanFootball';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-history-of-basketball" element={<Basketball />} />
        <Route path="/the-history-of-football" element={<Football />} />
        <Route path="/the-history-of-american-football" element={<AmericanFootball />} />
        <Route path="/the-history-of-tennis" element={<Tennis />} />
      </Routes>
    </Router>
  );
};

export default App;
