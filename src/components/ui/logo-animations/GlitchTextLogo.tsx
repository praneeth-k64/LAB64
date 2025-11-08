'use client';

import { motion as m } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GlitchTextLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function GlitchTextLogo({
  width = '200px',
  height = '70px',
  className = ''
}: GlitchTextLogoProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    // Random intense glitch every 4-7 seconds
    const triggerGlitch = () => {
      setIsGlitching(true);

      // Multiple glitch pulses
      const pulses = [0, 100, 200, 250];
      pulses.forEach((delay) => {
        setTimeout(() => {
          setGlitchIntensity(Math.random());
        }, delay);
      });

      setTimeout(() => {
        setIsGlitching(false);
        setGlitchIntensity(0);
      }, 400);

      const nextGlitch = 4000 + Math.random() * 3000;
      setTimeout(triggerGlitch, nextGlitch);
    };

    const timer = setTimeout(triggerGlitch, 2000);
    return () => clearTimeout(timer);
  }, []);

  const getRandomOffset = () => isGlitching ? (Math.random() - 0.5) * 20 * glitchIntensity : 0;

  return (
    <div
      style={{ width, height, position: 'relative' }}
      className={className}
    >
      {/* Base layer */}
      <m.div
        className="absolute inset-0"
        animate={{
          x: isGlitching ? getRandomOffset() : 0,
          y: isGlitching ? getRandomOffset() : 0
        }}
        transition={{ duration: 0.05 }}
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

      {/* Glitch layers with color shifts */}
      {isGlitching && (
        <>
          {/* Red glitch layer */}
          <m.div
            className="absolute inset-0 mix-blend-screen"
            animate={{
              x: getRandomOffset(),
              y: getRandomOffset(),
              opacity: 0.8
            }}
            transition={{ duration: 0.05 }}
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

          {/* Cyan glitch layer */}
          <m.div
            className="absolute inset-0 mix-blend-screen"
            animate={{
              x: getRandomOffset(),
              y: getRandomOffset(),
              opacity: 0.8
            }}
            transition={{ duration: 0.05 }}
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

          {/* Horizontal slices */}
          <div className="absolute inset-0 overflow-hidden">
            {[0, 1, 2, 3].map((i) => (
              <m.div
                key={i}
                className="absolute h-[25%] w-full"
                style={{
                  top: `${i * 25}%`,
                  clipPath: 'inset(0)'
                }}
                animate={{
                  x: isGlitching ? (Math.random() - 0.5) * 30 : 0
                }}
                transition={{ duration: 0.05 }}
              >
                <Image
                  src="/LAB64-logo.png"
                  alt=""
                  width={200}
                  height={70}
                  className="w-full object-contain"
                  style={{ height: '280%', marginTop: `-${i * 100}%` }}
                />
              </m.div>
            ))}
          </div>
        </>
      )}

      {/* Static noise overlay */}
      {isGlitching && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
          }}
        />
      )}
    </div>
  );
}
