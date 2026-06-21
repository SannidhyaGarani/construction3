import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';

const axisOffset = (direction) => {
  if (direction === 'up') return { y: 24 };
  if (direction === 'down') return { y: -24 };
  if (direction === 'left') return { x: 24 };
  if (direction === 'right') return { x: -24 };
  return {};
};

const Reveal = ({ children, direction = 'up', delay = 0, duration = 0.7, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const hidden = { opacity: 0, ...axisOffset(direction) };
  const show = { opacity: 1, x: 0, y: 0 };

  return (
    <Motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? show : hidden}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default Reveal;
