'use client';

import { motion as m } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HolographicGlitchLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function HolographicGlitchLogo({
  width = '200px',
  height = '70px',
  className = ''
}: HolographicGlitchLogoProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Random glitch effect every 3-6 seconds
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);

      const nextGlitch = 3000 + Math.random() * 3000;
      setTimeout(triggerGlitch, nextGlitch);
    };

    const timer = setTimeout(triggerGlitch, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ width, height, position: 'relative' }}
      className={className}
    >
      {/* Base layer */}
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

      {/* Red channel - offset left when glitching */}
      <m.div
        className="absolute inset-0 mix-blend-screen opacity-70"
        animate={{
          x: isGlitching ? -3 : 0,
          opacity: isGlitching ? 0.9 : 0
        }}
        transition={{ duration: 0.1 }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(7426%) hue-rotate(358deg) brightness(102%) contrast(118%)' }}
        />
      </m.div>

      {/* Blue channel - offset right when glitching */}
      <m.div
        className="absolute inset-0 mix-blend-screen opacity-70"
        animate={{
          x: isGlitching ? 3 : 0,
          opacity: isGlitching ? 0.9 : 0
        }}
        transition={{ duration: 0.1 }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(89%) saturate(6514%) hue-rotate(241deg) brightness(101%) contrast(143%)' }}
        />
      </m.div>

      {/* Scanline overlay */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.05) 50%)',
          backgroundSize: '100% 4px'
        }}
        animate={{
          opacity: isGlitching ? 0.3 : 0.1
        }}
      />

      {/* Holographic shimmer */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
}
