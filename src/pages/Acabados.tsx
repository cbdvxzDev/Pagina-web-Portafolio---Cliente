import { useEffect, useRef, useState } from 'react';
import { acabados } from '../data/acabados';
import TransitionLayout from '../components/TransitionLayout';
import { motion, AnimatePresence } from 'framer-motion';

const Acabados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % acabados.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const actual = acabados[currentIndex];

  return (
    <TransitionLayout>
      <section className="w-screen h-[100dvh] sm:h-screen overflow-hidden bg-white relative">

        {/* TÍTULO CENTRADO */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4 text-center">
          <h1 className="text-xl sm:text-4xl font-bold text-white px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
            Acabados & Detalles Constructivos
          </h1>
        </div>

        {/* CARRUSEL DE IMÁGENES */}
        <AnimatePresence mode="wait">
          <motion.div
            key={actual.id}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={actual.imagen}
              alt={actual.nombre}
              className="w-full h-full object-cover object-center"
            />

            {/* DESCRIPCIÓN */}
            <div className="absolute bottom-8 sm:bottom-10 left-5 sm:left-10 right-5 sm:right-auto bg-white/90 p-4 sm:p-6 rounded-xl shadow-xl max-w-[95%] sm:max-w-md">
              <h3 className="text-lg sm:text-2xl font-semibold text-indigo-600">
                {actual.nombre}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                {actual.descripcion}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </TransitionLayout>
  );
};

export default Acabados;
