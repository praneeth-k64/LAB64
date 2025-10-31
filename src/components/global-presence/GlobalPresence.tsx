'use client';

import { motion as m } from 'motion/react';
import { useState } from 'react';
import { SimplexNoise } from '@paper-design/shaders-react';

interface CountryCardProps {
  country: string;
  flag: string;
  city: string;
  index: number;
}

function CountryCard({ country, flag, city, index }: CountryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div
      className="relative h-40 sm:h-44 md:h-48 rounded-xl md:rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shader Background */}
      <div className="absolute inset-0">
        <SimplexNoise
          colors={['#0ea5e9', '#00ffff', '#8b5cf6', '#000000']}
          stepsPerColor={5}
          speed={0.15}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.2,
          }}
        />
      </div>

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10" />

      {/* Glow effect on hover */}
      <m.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-center items-center text-center">
        <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{flag}</div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-rajdhani font-bold text-white mb-1">
          {country}
        </h3>
        <p className="text-white/70 font-ibm-plex-sans text-xs sm:text-sm">{city}</p>
      </div>
    </m.div>
  );
}

export function GlobalPresence() {
  const countries = [
    {
      country: 'Czech Republic',
      flag: '🇨🇿',
      city: 'Prague',
    },
    {
      country: 'India',
      flag: '🇮🇳',
      city: 'Hyderabad',
    },
    {
      country: 'France',
      flag: '🇫🇷',
      city: 'Paris',
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      city: 'Berlin',
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-32" aria-label="Global presence">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <m.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-rajdhani font-bold text-white mb-3 sm:mb-4 px-4">
            Global Innovation Network
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-ibm-plex-sans px-4">
            Operating across four continents, connecting innovation ecosystems worldwide
          </p>
        </m.div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {countries.map((country, index) => (
            <CountryCard key={country.country} {...country} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
