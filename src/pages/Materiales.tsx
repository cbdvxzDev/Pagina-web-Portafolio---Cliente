import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TransitionLayout from '../components/TransitionLayout';

const materiales = [
  {
    nombre: 'Concreto',
    descripcion: 'Material robusto y moderno, ideal para estructuras expuestas, suelos y acabados industriales.',
    imagen: new URL('../assets/concetro.avif', import.meta.url).href,
  },
  {
    nombre: 'Madera',
    descripcion: 'Aporta calidez y textura. Usada en interiores, fachadas y mobiliario con carácter natural.',
    imagen: new URL('../assets/madera.jpeg', import.meta.url).href,
  },
  {
    nombre: 'Cristal',
    descripcion: 'Ligereza visual, transparencia y luz. Utilizado para fachadas, divisiones y vistas amplias.',
    imagen: new URL('../assets/cristal.jpg', import.meta.url).href,
  },
  {
    nombre: 'Acero',
    descripcion: 'Fuerza estructural y elegancia industrial. Ideal para detalles, marcos y escaleras modernas.',
    imagen: new URL('../assets/acero.webp', import.meta.url).href,
  },
];

const Materiales = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.material-track', {
        xPercent: -25 * (materiales.length - 1),
        duration: 30,
        ease: 'power2.inOut',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <TransitionLayout>
      <section className="bg-white overflow-hidden relative">
        {/* Título fijo arriba */}
        <div className="pt-28 sm:pt-32 pb-12 text-center z-10 relative px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Catálogo de <span className="text-indigo-600">Materiales</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-500 text-base sm:text-lg max-w-2xl mx-auto">
            Conoce los elementos claves del diseño arquitectónico moderno.
          </p>
        </div>

        {/* Carrusel horizontal adaptado */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden h-[100vh] sm:h-screen"
        >
          <div
            className="material-track flex w-fit"
            style={{ willChange: 'transform' }}
          >
            {materiales.map((material, index) => (
              <div
                key={index}
                className="w-screen h-[100vh] sm:h-screen flex-shrink-0 relative flex items-center justify-center"
              >
                {/* Imagen fullscreen */}
                <img
                  src={material.imagen}
                  alt={material.nombre}
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />

                {/* Texto superpuesto */}
                <div className="relative z-10 text-center px-6 sm:px-8">
                  <h3 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                    {material.nombre}
                  </h3>
                  <p className="text-sm sm:text-lg text-white max-w-md sm:max-w-2xl mx-auto drop-shadow-md">
                    {material.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TransitionLayout>
  );
};

export default Materiales;
