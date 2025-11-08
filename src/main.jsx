import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import App from './App.jsx'
import { UnderConstruction } from './components/common/UnderConstruction.jsx'
import { Contact } from './components/pages/Contact.jsx'
import { About } from './components/pages/About.jsx'
import { Projects } from './components/pages/Projects.jsx'
import { GeoClimb } from './components/pages/GeoClimb.jsx'
import { CorticalPlasticity } from './components/pages/CorticalPlasticity.jsx'
import { Ohmward } from './components/pages/Ohmward.jsx'
import { WildfireVulnerability } from './components/pages/WildfireVulnerability.jsx'
import { ScrollToTop } from './components/common/ScrollToTop.jsx'

// Component to handle 404 redirects from GitHub Pages
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect);
    }
  }, [navigate]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RedirectHandler />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/geoclimb" element={<GeoClimb />} />
        <Route path="/projects/cortical-plasticity" element={<CorticalPlasticity />} />
        <Route path="/projects/ohmward" element={<Ohmward />} />
        <Route path="/projects/wildfire-vulnerability" element={<WildfireVulnerability />} />
        <Route path="/project/:id" element={<UnderConstruction />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
