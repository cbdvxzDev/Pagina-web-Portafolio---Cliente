import { motion } from 'framer-motion';
import TransitionLayout from '../components/TransitionLayout';

const About = () => {
  return (
    <TransitionLayout>
      <section className="min-h-[100dvh] px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-16 max-w-6xl mx-auto">

        {/* TEXTO IZQUIERDO */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Diseñando <span className="text-indigo-500">espacios</span> con carácter
          </h2>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-5">
            Arquitecta con una visión estética, técnica y humana. Transformo ideas en espacios que generan conexión emocional, funcionalidad y belleza.
          </p>

          <p className="text-neutral-600 text-sm sm:text-base mb-6">
            Con más de 5 años de experiencia, mis proyectos combinan materiales nobles, diseño bioclimático y creatividad estratégica. Desde la primera línea hasta el último render, cada detalle importa.
          </p>

          <div className="border-l-4 border-indigo-600 pl-4 text-neutral-500 italic text-sm sm:text-base">
            “La arquitectura no es solo construir, es narrar historias a través del espacio.”
          </div>

          <div className="mt-8">
            <div className="w-16 h-1 bg-indigo-600 mx-auto md:mx-0 mb-3" />
            <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">
              Arquitecta Principal
            </p>
          </div>
        </motion.div>

        {/* IMAGEN A LA DERECHA (O ARRIBA EN MÓVIL) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-indigo-100 blur-xl rounded-3xl -z-10" />
            <img
              src="src/assets/persona.avif"
              alt="Arquitecta"
              className="w-[280px] sm:w-[320px] h-[420px] sm:h-[480px] object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </motion.div>
      </section>
    </TransitionLayout>
  );
};

export default About;
