'use client';

import { useEffect, useState, useCallback } from 'react';

/**
 * useScrollPause Hook
 *
 * Detects when the user is actively scrolling and provides a boolean state.
 * Used to pause expensive shader animations during scroll for better performance.
 *
 * @param delay - Milliseconds to wait after scroll stops before resuming (default: 150ms)
 * @returns isScrolling - Boolean indicating if user is currently scrolling
 */
export function useScrollPause(delay: number = 150): boolean {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let rafId: number;

    // Handle scroll events with requestAnimationFrame for optimal performance
    const handleScroll = () => {
      // Cancel any pending RAF to avoid duplicate state updates
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Use RAF to sync with browser's render cycle
      rafId = requestAnimationFrame(() => {
        // Set scrolling state to true
        if (!isScrolling) {
          setIsScrolling(true);
        }

        // Clear existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Set new timeout to detect scroll stop
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, delay);
      });
    };

    // Add scroll listener with passive flag (doesn't block scrolling)
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [delay, isScrolling]);

  return isScrolling;
}
