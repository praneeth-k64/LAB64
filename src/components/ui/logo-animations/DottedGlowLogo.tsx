'use client';

import { motion as m } from 'motion/react';
import Image from 'next/image';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';

interface DottedGlowLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function DottedGlowLogo({
  width = '200px',
  height = '70px',
  className = ''
}: DottedGlowLogoProps) {
  return (
    <div
      style={{ width, height }}
      className={`relative overflow-visible ${className}`}
    >
      {/* Container with dotted glow background */}
      <div className="relative w-full h-full">
        {/* Extended background area for glow effect */}
        <div className="absolute -inset-8 rounded-2xl overflow-hidden">
          <DottedGlowBackground
            className="pointer-events-none"
            opacity={1}
            gap={8}
            radius={1.5}
            color="rgba(96, 165, 250, 0.4)" // Blue dots
            glowColor="rgba(59, 130, 246, 0.8)" // Blue glow
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.2}
            speedScale={1}
          />
        </div>

        {/* Logo with subtle animation */}
        <m.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/LAB64-logo.png"
            alt="LAB64 Logo"
            width={200}
            height={70}
            priority
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </m.div>

        {/* Subtle pulse glow behind logo */}
        <m.div
          className="absolute inset-0 pointer-events-none"
          style={{ filter: 'blur(20px)' }}
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
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
    </div>
  );
}
