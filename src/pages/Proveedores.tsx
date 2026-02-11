import TransitionLayout from '../components/TransitionLayout';
import ProveedorExpandingCard from '../components/ProveedorExpandingCard';

const proveedores = [
  {
    nombre: 'HunterDouglas',
    logo: new URL('../assets/proveedores/hunterdouprovee.webp', import.meta.url).href,
  },
  {
    nombre: 'Vitelsa',
    logo: new URL('../assets/proveedores/vitelsaprovee.png', import.meta.url).href,
  },
  {
    nombre: 'Madecentro',
    logo: new URL('../assets/proveedores/madecentroprovee.webp', import.meta.url).href,
  },
  {
    nombre: 'Cerámicas & Mármol',
    logo: new URL('../assets/proveedores/MAXceraprovee.jpg', import.meta.url).href,
  },
  {
    nombre: 'Pinturas',
    logo: new URL('../assets/proveedores/pintucoprovee.jpeg', import.meta.url).href,
  },
];

const Proveedores = () => {
  return (
    <TransitionLayout>
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-28 sm:py-32">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Nuestros <span className="text-indigo-600">Proveedores</span>
          </h1>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-base sm:text-lg">
            Aliados estratégicos que nos brindan calidad, innovación y confianza en cada proyecto.
          </p>
        </div>

        <div className="flex w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
          {proveedores.map((p, i) => (
            <ProveedorExpandingCard key={i} nombre={p.nombre} logo={p.logo} />
          ))}
        </div>
      </section>
    </TransitionLayout>
  );
};

export default Proveedores;
