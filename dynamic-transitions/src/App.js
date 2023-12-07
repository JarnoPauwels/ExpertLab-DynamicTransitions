// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Basketball from './components/Basketball';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-history-of-basketball" element={<Basketball />} />
        <Route path="/the-history-of-football" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
