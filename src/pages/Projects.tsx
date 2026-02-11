import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: 'Casa Moderna en Montaña',
    description:
      'Una residencia elegante integrada al paisaje. Diseño bioclimático con estructura expuesta y acabados en piedra natural.',
    image: new URL('../assets/proyectos/render-casa.jpg', import.meta.url).href,
  },
  {
    id: '2',
    title: 'Edificio Conceptual',
    description:
      'Proyecto experimental con circulación vertical expuesta. Ideal para coworking, galería y zonas comerciales.',
    image: new URL('../assets/proyectos/edificio-render.jpg', import.meta.url).href,
  },
];

const Projects = () => {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 bg-white max-w-7xl mx-auto space-y-20 sm:space-y-28">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-900 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos destacados
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`flex flex-col ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } md:flex-row items-center gap-8 sm:gap-12`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {/* Imagen */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full sm:w-[90%] md:w-1/2 h-64 sm:h-80 md:h-[420px] object-cover rounded-xl shadow-xl hover:scale-[1.02] transition duration-300"
          />

          {/* Texto */}
          <div className="md:w-1/2 space-y-4 sm:space-y-5 text-center md:text-left px-1 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600">
              {project.title}
            </h3>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            <Link
              to={`/proyectos/${project.id}`}
              className="inline-block text-indigo-600 font-medium hover:underline transition"
            >
              Ver detalles →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
