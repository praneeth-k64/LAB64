"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Animate gradient from top to bottom based on scroll progress
  // Start with gradient off-screen (negative) and move it down as we scroll
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8, 1], [-200, windowHeight * 0.6, windowHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, windowHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <>
      <div className="fixed top-0 right-4 md:right-8 h-screen z-50 pointer-events-none flex items-start">
        <svg
          viewBox={`0 0 20 ${windowHeight}`}
          width="20"
          height={windowHeight}
          className="block"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          {/* Background track */}
          <motion.path
            d={`M 10 0 L 10 ${windowHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="1.25"
          />
          {/* Animated gradient progress line */}
          <motion.path
            d={`M 10 0 L 10 ${windowHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#0ea5e9" stopOpacity="0"></stop>
              <stop stopColor="#0ea5e9"></stop>
              <stop offset="0.325" stopColor="#00ffff"></stop>
              <stop offset="1" stopColor="#8b5cf6" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className={cn("relative mx-auto h-full w-full", className)}>{children}</div>
    </>
  );
};
