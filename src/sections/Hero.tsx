import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 bg-white overflow-hidden">

      {/* Imagen de fondo animada */}
      <motion.img
        src="/assets/hero-3d.jpg"
        alt="Render arquitectura"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-[-1]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Título */}
      <motion.h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 leading-snug sm:leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Arquitectura que transforma
        <br />
        <span className="text-indigo-600">espacios en arte</span>
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="mt-5 text-neutral-600 max-w-xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Renders, planos, maquetas digitales y diseño profesional reunidos en un solo lugar.
      </motion.p>

      {/* Botón */}
      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          to="/proyectos"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg transition text-sm sm:text-base"
        >
          Ver Proyectos
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
