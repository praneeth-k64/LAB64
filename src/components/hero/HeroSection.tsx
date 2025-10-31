'use client';

import { useState, useEffect, useRef } from 'react';
import { motion as m } from 'motion/react';
import { HeroBackground, ShaderType } from './HeroBackground';
import { ShaderSelector } from '../ui/ShaderSelector';
import { TextEffect } from '../ui/text-effect';
import { SectionFade } from '../ui/SectionFade';
import ScrollIndicator from '../ui/scroll-indicator';

export function HeroSection() {
  const [currentShader, setCurrentShader] = useState<ShaderType>('holographic-data-field');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger animation on initial load
    const timer = setTimeout(() => setIsVisible(true), 100);

    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and trigger animation when section comes into view
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 50);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      clearTimeout(timer);
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ transform: 'translateZ(0)' }}
      aria-label="Hero section"
    >
      {/* Shader Selector Dropdown */}
      <ShaderSelector
        currentShader={currentShader}
        onShaderChange={setCurrentShader}
      />

      {/* Paper Shaders Animated Background */}
      <HeroBackground shaderType={currentShader} />

      {/* Professional gradient fade for smooth transition to next section */}
      <SectionFade direction="bottom" height="240px" className="z-[5]" />

      {/* Hero Content */}
      <m.div
        className="relative z-10 container mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mb-6">
          <TextEffect
            per="word"
            as="h1"
            preset="blur"
            delay={0.2}
            speedReveal={2}
            speedSegment={1.5}
            trigger={isVisible}
            className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-lg font-rajdhani font-semibold"
          >
            Pioneering the Future with AI & Innovation
          </TextEffect>
        </div>
        <div>
          <TextEffect
            per="word"
            as="p"
            preset="fade-in-blur"
            delay={0.5}
            speedReveal={1.5}
            speedSegment={1.2}
            trigger={isVisible}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md font-ibm-plex-sans font-light"
          >
            Accelerating intelligence. Shapeshifting effortlessly.
          </TextEffect>
        </div>
      </m.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
