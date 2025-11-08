import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { UnderConstruction } from './components/common/UnderConstruction.jsx'
import { Contact } from './components/pages/Contact.jsx'
import { About } from './components/pages/About.jsx'
import { Projects } from './components/pages/Projects.jsx'
import { GeoClimb } from './components/pages/GeoClimb.jsx'
import { ScrollToTop } from './components/common/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/geoclimb" element={<GeoClimb />} />
        <Route path="/project/:id" element={<UnderConstruction />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
