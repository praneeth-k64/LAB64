'use client';

import { motion as m } from 'motion/react';
import { GlassmorphButton } from '../ui/GlassmorphButton';
import { HolographicGlitchLogo } from '../ui/logo-animations/HolographicGlitchLogo';

export function Navigation() {
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
      <div className="relative w-full px-3 sm:px-4">
        <div className="relative flex items-center h-16 sm:h-20 md:h-24">
          {/* LAB64 Logo - Left Side */}
          <m.div
            className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-32 h-11 sm:w-40 sm:h-14 md:w-48 md:h-16 lg:w-[200px] lg:h-[70px]">
              <HolographicGlitchLogo width="100%" height="100%" />
            </div>
          </m.div>

          {/* Right Side - Contact Button */}
          <m.div
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="scale-75 sm:scale-90 md:scale-100 origin-right">
              <GlassmorphButton
                onClick={handleContact}
                fontClass="font-ibm-plex-sans"
                fontWeight="font-light"
              >
                Contact
              </GlassmorphButton>
            </div>
          </m.div>
        </div>
      </div>
    </m.nav>
  );
}
