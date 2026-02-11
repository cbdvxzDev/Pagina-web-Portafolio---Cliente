import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    src: 'src/assets/proyectos/render-casa.jpg',
    title: 'Casa en la montaña',
    type: '3D',
  },
  {
    id: 2,
    src: '/assets/proyectos/plano-casa.jpg',
    title: 'Plano estructural',
    type: 'Plano',
  },
  {
    id: 3,
    src: '/assets/proyectos/foto-obras.jpg',
    title: 'Obra en ejecución',
    type: 'Foto',
  },
  {
    id: 4,
    src: '/assets/proyectos/render-loft.jpg',
    title: 'Diseño interior',
    type: '3D',
  },
];

const filters = ['Todo', '3D', 'Plano', 'Foto'];

const Gallery = () => {
  const [selectedType, setSelectedType] = useState('Todo');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredItems =
    selectedType === 'Todo'
      ? galleryItems
      : galleryItems.filter((item) => item.type === selectedType);

  return (
    <section className="px-6 py-24 bg-white max-w-7xl mx-auto">
      {/* Título */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-neutral-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Galería de Proyectos
      </motion.h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedType(filter)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              selectedType === filter
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'text-neutral-600 border-neutral-300 hover:border-indigo-600 hover:text-indigo-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              onClick={() => setModalImage(item.src)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3">
                <p className="text-indigo-600 text-xs">{item.type}</p>
                <h3 className="text-lg font-medium text-neutral-800">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={modalImage}
              alt="Vista ampliada"
              className="max-w-3xl w-full rounded-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
