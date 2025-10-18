// App.jsx / App.js
import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhoridNewsletters from './pages/PhoridNewsletters';
import IdentificationKeys from './pages/IdentificationKeys';
import Morphometrics from './pages/Morphometrics';
import PhotoGallery from './pages/PhotoGallery';

// Use hash on GitHub Pages; browser locally
const Router =
  process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router /* basename ONLY if gh-pages repo subpath, e.g.: basename="/phorid.net" */>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phoridae/newsletters" element={<PhoridNewsletters />} />
        <Route path="/phoridae/identificationKeys" element={<IdentificationKeys />} />
        <Route path="/phoridae/morphometrics" element={<Morphometrics />} />
        <Route path="/phoridae/photoGallery" element={<PhotoGallery />} />
        {/* (Optional) catch-all to a NotFound page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
