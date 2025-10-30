'use client';

/**
 * AnimationProvider Component
 *
 * Note: The 'motion' library (unlike framer-motion) doesn't require LazyMotion wrapper.
 * It's already optimized for tree-shaking and lazy loading out of the box.
 * We keep this provider component for future extensibility (e.g., motion config).
 */
export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
