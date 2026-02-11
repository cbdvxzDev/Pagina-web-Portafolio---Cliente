import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TransitionLayout from '../components/TransitionLayout';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: 'Casa Moderna en Montaña',
    location: 'Santander, Colombia',
    year: 2024,
    description:
      'Residencia diseñada para integrarse con el entorno montañoso. Se priorizó la sostenibilidad, ventilación cruzada y conexión con la naturaleza.',
    type: 'Render 3D + Obra construida',
    media: [
      new URL('../assets/proyectos/render-casa.jpg', import.meta.url).href,
      new URL('../assets/proyectos/render-casa-2.avif', import.meta.url).href,
      new URL('../assets/casa.mp4', import.meta.url).href,
    ],
  },
  {
    id: '2',
    title: 'Edificio Conceptual',
    location: 'Bogotá, Colombia',
    year: 2023,
    description:
      'Diseño de edificio con enfoque de coworking. Fachada viva, estructura modular y espacios colaborativos abiertos.',
    type: 'Conceptual + Plano técnico',
    media: [
      new URL('../assets/proyectos/edificio-render.jpg', import.meta.url).href,
      new URL('../assets/plano3d.mp4', import.meta.url).href,
    ],
  },
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) navigate('/proyectos');
  }, [project, navigate]);

  if (!project) return null;

  return (
    <TransitionLayout>
      <section className="bg-white min-h-screen px-4 sm:px-6 pt-24 pb-36 max-w-7xl mx-auto">

        {/* Botón volver en móviles */}
        <div className="mb-6 md:hidden">
          <Link
            to="/proyectos"
            className="text-indigo-500 text-sm font-medium hover:underline"
          >
            ← Volver a proyectos
          </Link>
        </div>

        {/* Imagen principal */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.media[0]}
            alt={project.title}
            className="w-full h-64 sm:h-96 md:h-[500px] object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Ficha técnica */}
        <motion.div
          className="mb-12 grid gap-8 md:grid-cols-3 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">{project.title}</h2>
            <p className="text-indigo-600 font-medium mt-2">{project.type}</p>
          </div>
          <div>
            <p className="text-neutral-700"><strong>Ubicación:</strong> {project.location}</p>
            <p className="text-neutral-700"><strong>Año:</strong> {project.year}</p>
          </div>
          <div>
            <p className="text-neutral-700">{project.description}</p>
          </div>
        </motion.div>

        {/* Galería multimedia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {project.media.map((src, i) => {
            const isVideo = src.endsWith('.mp4');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform"
              >
                {isVideo ? (
                  <video
                    controls
                    className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl"
                  >
                    <source src={src} type="video/mp4" />
                    Tu navegador no soporta video.
                  </video>
                ) : (
                  <img
                    src={src}
                    alt={`Vista ${i + 1}`}
                    className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-20 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-neutral-800 text-xl font-medium mb-4">
            ¿Te gustaría un diseño similar?
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Hablemos del proyecto →
          </Link>
        </motion.div>
      </section>
    </TransitionLayout>
  );
};

export default ProjectDetails;
