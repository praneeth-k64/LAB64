'use client';

import { motion as m } from 'motion/react';
import Image from 'next/image';

interface GradientShimmerLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function GradientShimmerLogo({
  width = '200px',
  height = '70px',
  className = ''
}: GradientShimmerLogoProps) {
  return (
    <div
      style={{ width, height, position: 'relative', overflow: 'hidden' }}
      className={className}
    >
      {/* Base logo */}
      <div className="absolute inset-0">
        <Image
          src="/LAB64-logo.png"
          alt="LAB64 Logo"
          width={200}
          height={70}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Animated gradient overlay */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2
        }}
      />

      {/* Subtle glow that pulses */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: 'blur(15px)',
          opacity: 0
        }}
        animate={{
          opacity: [0, 0.2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 2
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
