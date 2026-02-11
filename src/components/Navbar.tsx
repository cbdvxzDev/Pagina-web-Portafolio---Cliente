import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Materiales', path: '/materiales' },
    {label: 'Proveedores', path: 'proveedores'},
    { label: 'Acabados', path: '/acabados' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Sobre mí', path: '/sobre-mi' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-neutral-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-indigo-600">Portafolio</span>Arq
        </motion.div>
      </Link>


        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-6 h-6 text-neutral-600" />
            ) : (
              <HiMenu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold text-neutral-500">
          {navItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={item.path}
                className={`hover:text-indigo-600 transition-all ${
                  location.pathname === item.path
                    ? 'text-indigo-600 font-semibold'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Menú mobile desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-sm shadow-md px-6"
          >
            <ul className="flex flex-col py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-base font-medium text-neutral-700 hover:text-indigo-600 transition ${
                      location.pathname === item.path ? 'text-indigo-600' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
