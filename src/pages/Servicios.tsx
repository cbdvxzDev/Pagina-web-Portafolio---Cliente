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
    const lenis = new Lenis({smooth:true})

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const slides = gsap.utils.toArray('.service-slide');

    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollRef.current?.offsetWidth || 0}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <TransitionLayout>
      <section className="bg-white overflow-hidden">
        <div className="pt-28 sm:pt-32 pb-14 text-center px-4 sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Áreas de <span className="text-indigo-600">Servicio</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-500 text-base sm:text-lg max-w-xl mx-auto">
            Arquitectura con alma, visión técnica y diseño estratégico.
          </p>
        </div>

        <div ref={scrollRef} className="flex w-fit min-h-screen">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-slide w-screen flex-shrink-0 flex flex-col justify-center items-center px-6 sm:px-10 text-center"
              >
                <div className="text-indigo-600 text-4xl sm:text-5xl mb-5">
                  <Icon />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 max-w-sm text-sm sm:text-base px-2">
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
