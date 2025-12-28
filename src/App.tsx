import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { ScrollToTop } from './components/ScrollToTop';
function App() {
  return <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>;
}
export { App };