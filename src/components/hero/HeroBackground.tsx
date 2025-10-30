'use client';

import { useEffect, useState, useRef } from 'react';
import { getLayeredShader, LayeredShaderType } from './LayeredShaderConfigs';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export type ShaderType = LayeredShaderType;

interface HeroBackgroundProps {
  shaderType?: ShaderType;
}

/**
 * HeroBackground Component
 * Layered Paper Shaders for technology/innovation/visionary themes
 * Fallback to CSS gradient on mobile or WebGL-unsupported devices
 *
 * Performance Optimizations:
 * - Pauses shaders when out of viewport to reduce GPU/CPU load
 * - Uses IntersectionObserver to detect visibility
 * - Maintains 2-layer shader stacking for aesthetics
 */
export function HeroBackground({ shaderType = 'mesh-wireframe' }: HeroBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [useWebGL, setUseWebGL] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track if hero section is in viewport (for shader pause/resume)
  const isInViewport = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    rootMargin: '50px', // Start rendering slightly before entering viewport
  });

  useEffect(() => {
    setIsMounted(true);

    // Check for WebGL support (keep shaders on all devices as per requirements)
    if (typeof window !== 'undefined') {
      const hasWebGL = (() => {
        try {
          const canvas = document.createElement('canvas');
          return !!(
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl')
          );
        } catch {
          return false;
        }
      })();

      setUseWebGL(hasWebGL);
    }
  }, []);

  // CSS fallback for no WebGL support
  if (!isMounted || !useWebGL) {
    return (
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        <style jsx>{`
          @keyframes gradientShift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </div>
    );
  }

  // Render shaders only when in viewport for performance
  // When out of viewport, shaders are completely unmounted (paused)
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        contain: 'layout style paint',
        contentVisibility: 'auto',
      }}
    >
      {isInViewport && getLayeredShader(shaderType)}
    </div>
  );
}
