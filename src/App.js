import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhoridNewsletters from './pages/PhoridNewsletters';
import IdentificationKeys from './pages/IdentificationKeys';
import Morphometrics from './pages/Morphometrics';
import PhotoGallery from './pages/PhotoGallery';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="phoridae/newsletters" element={<PhoridNewsletters />} />
          <Route path="phoridae/identificationKeys" element={<IdentificationKeys />} />
          <Route path="phoridae/morphometrics" element={<Morphometrics />} />
          <Route path="phoridae/photoGallery" element={<PhotoGallery />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;