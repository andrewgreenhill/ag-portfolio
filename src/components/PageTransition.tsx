import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { transitionDuration } from '../assets/constants';

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: transitionDuration }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
