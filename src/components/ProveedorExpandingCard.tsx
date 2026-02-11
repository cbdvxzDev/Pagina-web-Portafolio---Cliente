import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProveedorProps {
  nombre: string;
  logo: string;
}

const ProveedorExpandingCard = ({ nombre, logo }: ProveedorProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleInteraction = () => {
    if (isMobile) setIsActive(!isActive);
  };

  return (
    <motion.div
      className="flex-1 relative overflow-hidden transition-all duration-700 cursor-pointer group"
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={handleInteraction}
      style={{ flexBasis: isActive ? '45%' : '12%' }}
    >
      <motion.img
        src={logo}
        alt={nombre}
        className={`w-full h-full object-cover object-center 
          transition-all duration-700 
          ${isActive ? 'grayscale-0 brightness-100 scale-105' : 'grayscale brightness-75'}`}
      />

      {/* Glassmorphism overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4b008270] to-[#9819fa60] backdrop-blur-sm flex items-center justify-center transition-all duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
      >
        <motion.div
          className="text-center px-4 py-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-white text-lg sm:text-2xl font-bold drop-shadow-md">
            {nombre}
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProveedorExpandingCard;
