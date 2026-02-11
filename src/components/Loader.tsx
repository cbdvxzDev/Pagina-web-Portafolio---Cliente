import { motion } from 'framer-motion';

const loaderVariants = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '-100%' },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-neutral-900 flex items-center justify-center"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-white text-3xl font-semibold tracking-wider">
        Portafolio<span className="text-indigo-500">Arq</span>
      </div>
    </motion.div>
  );
};

export default Loader;
