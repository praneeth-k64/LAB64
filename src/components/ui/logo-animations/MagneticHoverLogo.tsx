'use client';

import { motion as m, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface MagneticHoverLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function MagneticHoverLogo({
  width = '200px',
  height = '70px',
  className = ''
}: MagneticHoverLogoProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic effect - pull toward cursor (max 20px)
    const maxDistance = 150;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const strength = Math.min(distance / maxDistance, 1);

    mouseX.set(distanceX * strength * 0.15);
    mouseY.set(distanceY * strength * 0.15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <m.div
      ref={ref}
      style={{
        width,
        height,
        x,
        y
      }}
      className={`relative cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/LAB64-logo.png"
        alt="LAB64 Logo"
        width={200}
        height={70}
        priority
        className="w-full h-full object-contain"
      />

      {/* Subtle glow on hover */}
      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: 'blur(20px)',
          opacity: useTransform(
            [mouseX, mouseY],
            ([latestX, latestY]) => {
              const distance = Math.sqrt((latestX as number) ** 2 + (latestY as number) ** 2);
              return Math.min(distance / 30, 0.3);
            }
          )
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
    </m.div>
  );
}
