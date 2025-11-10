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
import { BrowserAutomations } from './components/pages/BrowserAutomations.jsx'
import { SmallScaleMining } from './components/pages/SmallScaleMining.jsx'
import { GreenPortfolio } from './components/pages/GreenPortfolio.jsx'
import { SquareGoElasticSearch } from './components/pages/SquareGoElasticSearch.jsx'
import { FelicityLangfuse } from './components/pages/FelicityLangfuse.jsx'
import { YouTubeSync } from './components/pages/YouTubeSync.jsx'
import { PhysicalWeb } from './components/pages/PhysicalWeb.jsx'
import { GoldmanSachs } from './components/pages/GoldmanSachs.jsx'
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
        <Route path="/projects/browser-automations" element={<BrowserAutomations />} />
        <Route path="/projects/small-scale-mining" element={<SmallScaleMining />} />
        <Route path="/projects/greenportfolio" element={<GreenPortfolio />} />
        <Route path="/projects/square-go-elastic-search" element={<SquareGoElasticSearch />} />
        <Route path="/projects/felicity-langfuse" element={<FelicityLangfuse />} />
        <Route path="/projects/youtube-sync" element={<YouTubeSync />} />
        <Route path="/projects/physical-web" element={<PhysicalWeb />} />
        <Route path="/projects/goldman-sachs" element={<GoldmanSachs />} />
        <Route path="/project/:id" element={<UnderConstruction />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
