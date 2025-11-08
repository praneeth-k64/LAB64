'use client';

import { motion as m } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface Point {
  x: number;
  y: number;
}

interface NeuralNetworkLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function NeuralNetworkLogo({
  width = '200px',
  height = '70px',
  className = ''
}: NeuralNetworkLogoProps) {
  const [isActive, setIsActive] = useState(false);
  const [connections, setConnections] = useState<[Point, Point][]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Trigger neural network animation periodically
    const triggerAnimation = () => {
      setIsActive(true);

      // Generate random connection points
      const numConnections = 8;
      const newConnections: [Point, Point][] = [];

      for (let i = 0; i < numConnections; i++) {
        newConnections.push([
          { x: Math.random() * 100, y: Math.random() * 100 },
          { x: Math.random() * 100, y: Math.random() * 100 }
        ]);
      }

      setConnections(newConnections);

      setTimeout(() => setIsActive(false), 2000);
    };

    // Trigger every 8 seconds
    const interval = setInterval(triggerAnimation, 8000);
    // Initial trigger after 1 second
    const timeout = setTimeout(triggerAnimation, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{ width, height, position: 'relative' }}
      className={className}
    >
      {/* Logo base */}
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

      {/* Neural network overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {connections.map((connection, index) => (
          <m.line
            key={index}
            x1={`${connection[0].x}%`}
            y1={`${connection[0].y}%`}
            x2={`${connection[1].x}%`}
            y2={`${connection[1].y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isActive ? 1 : 0,
              opacity: isActive ? [0, 1, 1, 0] : 0
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Node points */}
        {connections.flatMap((connection) => [connection[0], connection[1]]).map((point, index) => (
          <m.circle
            key={`node-${index}`}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="2"
            fill="#60A5FA"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isActive ? [0, 1.5, 1] : 0,
              opacity: isActive ? [0, 1, 0.8, 0] : 0
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.05,
              ease: 'easeOut'
            }}
          />
        ))}
      </svg>

      {/* Pulse effect when active */}
      <m.div
        className="absolute inset-0 pointer-events-none border border-blue-500/30 rounded-lg"
        animate={{
          opacity: isActive ? [0, 0.5, 0] : 0,
          scale: isActive ? [1, 1.05, 1] : 1
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </div>
  );
}
