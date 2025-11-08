'use client';

import { motion as m } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface QuantumFlickerLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function QuantumFlickerLogo({
  width = '200px',
  height = '70px',
  className = ''
}: QuantumFlickerLogoProps) {
  const [flickerStates, setFlickerStates] = useState<number[]>([1, 1, 1, 1, 1, 1]);

  useEffect(() => {
    const flicker = () => {
      // Randomly flicker individual "quantum states"
      setFlickerStates((prev) =>
        prev.map(() => (Math.random() > 0.85 ? Math.random() * 0.3 : 1))
      );
    };

    const interval = setInterval(flicker, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ width, height, position: 'relative' }}
      className={className}
    >
      {/* Create multiple overlapping layers for quantum effect */}
      {flickerStates.map((opacity, index) => (
        <m.div
          key={index}
          className="absolute inset-0"
          animate={{ opacity }}
          transition={{ duration: 0.05 }}
        >
          <Image
            src="/LAB64-logo.png"
            alt={index === 0 ? 'LAB64 Logo' : ''}
            width={200}
            height={70}
            priority={index === 0}
            className="w-full h-full object-contain"
            style={{
              transform: `translate(${Math.sin(index) * 0.5}px, ${Math.cos(index) * 0.5}px)`
            }}
          />
        </m.div>
      ))}

      {/* Subtle glow that pulses */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{ filter: 'blur(10px)' }}
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain brightness-200"
        />
      </m.div>
    </div>
  );
}
