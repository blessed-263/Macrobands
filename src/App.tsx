import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import RegionalNetwork from './pages/RegionalNetwork';
import Contact from './pages/Contact';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <BrowserRouter>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      {splashDone && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="regional-network" element={<RegionalNetwork />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
