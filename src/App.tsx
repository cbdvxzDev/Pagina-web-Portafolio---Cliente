import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './sections/Gallery'; 
import ProjectDetails from './sections/ProjectDetails';
import Acabados from './pages/Acabados'; 
import Servicios from './pages/Servicios';
import Materiales from './pages/Materiales';
import Proveedores from './pages/Proveedores';

import TransitionLayout from './components/TransitionLayout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();

  return (
    <TransitionLayout>
      <ScrollToTop />
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/:projectId" element={<ProjectDetails />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/acabados" element={<Acabados />} />
        <Route path="/servicios" element={<Servicios />} /> 
        <Route path="/materiales" element={<Materiales/>}/>
        <Route path="/proveedores" element={<Proveedores/>}/>
      </Routes>

      <Footer />
    </TransitionLayout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
