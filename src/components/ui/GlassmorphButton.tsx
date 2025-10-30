'use client';

import { motion as m } from 'motion/react';
import { ReactNode } from 'react';

interface GlassmorphButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  fontClass?: string;
  fontWeight?: string;
}

export function GlassmorphButton({
  children,
  onClick,
  className = '',
  fontClass = '',
  fontWeight = ''
}: GlassmorphButtonProps) {
  return (
    <m.button
      onClick={onClick}
      className={`
        relative
        px-6 py-2.5 rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white text-lg md:text-xl
        transition-all duration-100
        shadow-lg shadow-black/20
        ${fontClass} ${fontWeight} ${className}
      `}
      whileHover={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.1,
        ease: 'easeOut'
      }}
    >
      {children}
    </m.button>
  );
}
