'use client';

import { motion as m, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MouseEvent, useRef } from 'react';
import Image from 'next/image';

interface RotationTiltLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function RotationTiltLogo({
  width = '200px',
  height = '70px',
  className = ''
}: RotationTiltLogoProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={ref}
      style={{ width, height, perspective: '1000px' }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <m.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="w-full h-full relative cursor-pointer"
      >
        <Image
          src="/LAB64-logo.png"
          alt="LAB64 Logo"
          width={200}
          height={70}
          priority
          className="w-full h-full object-contain"
          style={{ transform: 'translateZ(20px)' }}
        />

        {/* Shadow layer for depth */}
        <m.div
          className="absolute inset-0 opacity-30 blur-md"
          style={{
            transform: 'translateZ(-10px)',
            scale: useTransform([rotateX, rotateY], ([x, y]) => {
              const tiltAmount = Math.abs(x as number) + Math.abs(y as number);
              return 1 + tiltAmount * 0.01;
            })
          }}
        >
          <Image
            src="/LAB64-logo.png"
            alt=""
            width={200}
            height={70}
            className="w-full h-full object-contain brightness-0"
          />
        </m.div>
      </m.div>
    </div>
  );
}
