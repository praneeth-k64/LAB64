'use client';

import { motion as m } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

interface ChromaticAberrationLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function ChromaticAberrationLogo({
  width = '200px',
  height = '70px',
  className = ''
}: ChromaticAberrationLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ width, height, position: 'relative' }}
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base layer (Green channel) */}
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

      {/* Red channel - offset left */}
      <m.div
        className="absolute inset-0 mix-blend-screen"
        animate={{
          x: isHovered ? -2 : 0,
          opacity: isHovered ? 0.7 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain"
          style={{
            filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(7426%) hue-rotate(358deg) brightness(102%) contrast(118%)'
          }}
        />
      </m.div>

      {/* Cyan channel - offset right */}
      <m.div
        className="absolute inset-0 mix-blend-screen"
        animate={{
          x: isHovered ? 2 : 0,
          opacity: isHovered ? 0.7 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain"
          style={{
            filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(1290%) hue-rotate(140deg) brightness(96%) contrast(101%)'
          }}
        />
      </m.div>

      {/* Subtle glow on hover */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{ filter: 'blur(15px)' }}
        animate={{
          opacity: isHovered ? 0.3 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/LAB64-logo.png"
          alt=""
          width={200}
          height={70}
          className="w-full h-full object-contain brightness-150"
        />
      </m.div>
    </div>
  );
}
