import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import {
  FaPencilRuler,
  FaDraftingCompass,
  FaCubes,
  FaHardHat,
  FaCity,
  FaLeaf,
  FaRulerCombined,
  FaCouch,
  FaProjectDiagram,
  FaPlayCircle,
  FaPalette,
} from 'react-icons/fa';
import TransitionLayout from '../components/TransitionLayout';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Diseño Arquitectónico', description: 'Desde el concepto hasta la materialización con visión estética y técnica.', icon: FaDraftingCompass },
  { title: 'Renderizado 3D', description: 'Imágenes que comunican espacios con emoción, luz y profundidad.', icon: FaCubes },
  { title: 'Planos Técnicos', description: 'Precisión milimétrica para que cada idea sea construida con exactitud.', icon: FaPencilRuler },
  { title: 'Dirección de Obra', description: 'Supervisión en terreno para que todo se construya como fue soñado.', icon: FaHardHat },
  { title: 'Interiorismo & Espacios', description: 'Ambientes con alma, función y estilo coherente a tu identidad.', icon: FaCouch },
  { title: 'Diseño Urbano', description: 'Estrategias para una ciudad más humana, verde y habitable.', icon: FaCity },
  { title: 'Diseño Sostenible', description: 'Innovación con conciencia: eficiencia energética y materiales nobles.', icon: FaLeaf },
  { title: 'Levantamiento Arquitectónico', description: 'Digitalización de espacios existentes con detalle técnico profesional.', icon: FaRulerCombined },
  { title: 'Modelado BIM y Maquetas Digitales', description: 'Coordinación y análisis técnico con herramientas de nueva generación.', icon: FaProjectDiagram },
  { title: 'Animaciones Arquitectónicas', description: 'Recorridos virtuales en video para vender la experiencia, no solo el plano.', icon: FaPlayCircle },
  { title: 'Branding Espacial', description: 'Conexión entre diseño y marca para crear espacios con identidad.', icon: FaPalette },
];

const Servicios = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Inicialización de Lenis (sin la propiedad 'smooth')
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 2. Sincronizar Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 3. Animación de Scroll Horizontal
    const slides = gsap.utils.toArray('.service-slide');

    const ctx = gsap.context(() => {
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollRef.current,
          pin: true,
          scrub: 1,
          // El final depende del ancho total del scroll
          end: () => `+=${scrollRef.current?.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, scrollRef);

    // 4. Limpieza (Cleanup)
    return () => {
      lenis.destroy();
      ctx.revert(); // Esto limpia todas las animaciones de GSAP dentro del contexto
    };
  }, []);

  return (
    <TransitionLayout>
      <section className="bg-white overflow-hidden">
        {/* Cabecera de la sección */}
        <div className="pt-28 sm:pt-32 pb-14 text-center px-4 sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Áreas de <span className="text-indigo-600">Servicio</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-500 text-base sm:text-lg max-w-xl mx-auto">
            Arquitectura con alma, visión técnica y diseño estratégico.
          </p>
        </div>

        {/* Contenedor de Slides horizontales */}
        <div ref={scrollRef} className="flex w-fit min-h-screen items-center bg-white">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-slide w-screen flex-shrink-0 flex flex-col justify-center items-center px-6 sm:px-10 text-center"
              >
                <div className="text-indigo-600 text-5xl sm:text-6xl mb-6 transition-transform duration-300 hover:scale-110">
                  <Icon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 max-w-md text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </TransitionLayout>
  );
};

export default Servicios;