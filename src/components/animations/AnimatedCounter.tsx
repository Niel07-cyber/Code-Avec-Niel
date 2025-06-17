
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};
