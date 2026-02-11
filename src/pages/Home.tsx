import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TransitionLayout from '../components/TransitionLayout';

const Home = () => {
  return (
    <TransitionLayout>
      <section className="relative min-h-screen bg-black/55 flex items-center justify-center overflow-hidden">

        <img
          src={new URL('../assets/fondo-arquitectura.avif', import.meta.url).href}
          alt="Fondo arquitectura moderna"
          className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-60"
        />

        <div className="absolute inset-0 backdrop-blur-sm z-0" />

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 py-12 sm:py-16">
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-snug sm:leading-tight mb-6 text-white drop-shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Arquitectura que <span className="text-indigo-500">conecta</span><br />
            forma, función y emoción
          </motion.h1>

          <motion.p
            className="text-base xs:text-lg sm:text-xl max-w-2xl mx-auto text-neutral-300 mb-10 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Portafolio profesional que fusiona técnica y arte: renders, planos, obra construida y visión arquitectónica.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/proyectos"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full font-medium shadow-lg transition"
            >
              Ver proyectos
            </Link>
            <Link
              to="/contacto"
              className="bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full font-medium border border-white/30 transition"
            >
              Contáctame
            </Link>
          </motion.div>
        </div>
      </section>
    </TransitionLayout>
  );
};

export default Home;
