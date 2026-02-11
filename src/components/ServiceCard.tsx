import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 group border border-neutral-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-indigo-600 text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
