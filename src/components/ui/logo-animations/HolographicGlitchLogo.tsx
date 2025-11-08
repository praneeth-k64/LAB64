'use client';

import { motion as m } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DottedGlowBackground } from '../dotted-glow-background';

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
      {/* Dotted glow background effect - extends beyond logo bounds and fades out */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '-50%',
          right: '-50%',
          top: '-50%',
          bottom: '-50%',
          width: '200%',
          height: '200%',
          maskImage: 'radial-gradient(ellipse 60% 60% at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)',
        }}
      >
        <DottedGlowBackground
          gap={10}
          radius={1.2}
          color="rgba(255, 255, 255, 0.3)"
          glowColor="rgba(0, 255, 255, 0.5)"
          opacity={0.6}
          backgroundOpacity={0}
          speedMin={0.2}
          speedMax={0.6}
          speedScale={0.7}
        />
      </div>

      {/* Base layer */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/LAB64-logo.png"
          alt="LAB64 Logo"
          width={200}
          height={70}
          priority
          className="w-full h-full object-contain"
        />
      </div>

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
