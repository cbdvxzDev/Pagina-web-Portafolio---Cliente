// src/components/AcabadoCard.tsx

interface AcabadoProps {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const AcabadoCard = ({ nombre, descripcion, imagen }: AcabadoProps) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute bottom-10 left-10 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-md z-10">
        <h3 className="text-2xl font-bold text-indigo-600">{nombre}</h3>
        <p className="text-gray-800 mt-2">{descripcion}</p>
      </div>
    </div>
  );
};

export default AcabadoCard;
