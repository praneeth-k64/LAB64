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
      {/* Base layer with pulsating holographic glow */}
      <m.div
        className="absolute inset-0"
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(0, 255, 255, 0.3)) drop-shadow(0 0 12px rgba(255, 0, 255, 0.2))',
            'drop-shadow(0 0 12px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 16px rgba(255, 0, 255, 0.3))',
            'drop-shadow(0 0 8px rgba(0, 255, 255, 0.3)) drop-shadow(0 0 12px rgba(255, 0, 255, 0.2))'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Image
          src="/LAB64-logo.png"
          alt="LAB64 Logo"
          width={200}
          height={70}
          priority
          className="w-full h-full object-contain"
        />
      </m.div>

      {/* Cyan channel - offset left when glitching */}
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
          style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(1000%) hue-rotate(160deg) brightness(110%) contrast(110%)' }}
        />
      </m.div>

      {/* Magenta channel - offset right when glitching */}
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
          style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(290deg) brightness(120%) contrast(120%)' }}
        />
      </m.div>

      {/* Subtle scanline overlay - only visible during glitch */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.03) 50%)',
          backgroundSize: '100% 3px'
        }}
        animate={{
          opacity: isGlitching ? 0.4 : 0
        }}
      />
    </div>
  );
}
