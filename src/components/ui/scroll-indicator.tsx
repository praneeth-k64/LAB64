"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ScrollIndicator() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-16 left-0 right-0 z-40 flex items-center justify-center pointer-events-none">
      <motion.div
        className="cursor-pointer pointer-events-auto"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1.5 },
          y: { duration: 0.8, delay: 1.5 },
        }}
        whileHover={{
          scale: 1.1,
          filter: "brightness(1.3)"
        }}
      >
        <div className="flex flex-col items-center gap-4">
        {/* Breathing circle with bounce animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-20 h-20 flex items-center justify-center"
        >
          {/* Breathing/pulsing ring effect - same as original */}
          <motion.div
            className="w-20 h-20 rounded-full border border-cyan-500/30 pointer-events-none"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Glow effect on hover - centered on the circle with smooth exit */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.3 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-purple-500/40 blur-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Text */}
        <motion.div
          className="font-rajdhani text-base font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          portfolio
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
