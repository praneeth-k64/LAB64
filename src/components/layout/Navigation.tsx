'use client';

import { motion as m } from 'motion/react';
import { GlassmorphButton } from '../ui/GlassmorphButton';
import { LiquidMetalLogo } from '../ui/LiquidMetalLogo';
import { SectionFade } from '../ui/SectionFade';

export function Navigation() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    window.location.href = 'mailto:contact@lab64.ai';
  };

  return (
    <m.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative w-full px-4">
        <div className="relative flex items-center h-24">
          {/* LAB64 Logo - Left Side */}
          <m.div
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <LiquidMetalLogo width="200px" height="70px" />
          </m.div>

          {/* Center Navigation Menu */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <button
              onClick={scrollToPortfolio}
              className="text-white/90 hover:text-white text-lg md:text-xl transition-all duration-200 hover:scale-105 relative group z-50 flex items-center font-ibm-plex-sans font-light"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Right Side - Contact Button */}
          <m.div
            className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassmorphButton
              onClick={handleContact}
              fontClass="font-ibm-plex-sans"
              fontWeight="font-light"
            >
              Contact
            </GlassmorphButton>
          </m.div>
        </div>
      </div>
    </m.nav>
  );
}
