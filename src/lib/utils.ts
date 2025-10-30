import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names
 * Based on shadcn/ui utility pattern
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if a URL is external (not same origin)
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Truncate text to a specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}
