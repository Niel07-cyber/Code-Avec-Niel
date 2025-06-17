
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const delayedFloatingVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }
};

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 text-blue-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
      >
        <Code size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-purple-400 opacity-20"
        variants={delayedFloatingVariants}
        animate="animate"
      >
        <Lightbulb size={35} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-green-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Target size={30} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-yellow-400 opacity-20"
        variants={delayedFloatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      >
        <Zap size={32} />
      </motion.div>
    </div>
  );
};
