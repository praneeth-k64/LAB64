import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // LAB64 brand colors
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#667eea', // Primary brand color
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#764ba2', // Secondary brand color
          600: '#6d3a96',
          700: '#5d2e7e',
          800: '#4f2869',
          900: '#422257',
        },
        accent: {
          50: '#fef5ff',
          100: '#fde8ff',
          200: '#fbd2ff',
          300: '#f9b1ff',
          400: '#f587ff',
          500: '#f093fb', // Accent color
          600: '#d978dd',
          700: '#b85fbf',
          800: '#9648a1',
          900: '#7b3686',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'rubik-80s-fade': ['var(--font-rubik-80s-fade)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'rajdhani': ['var(--font-rajdhani)', 'sans-serif'],
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)', 'sans-serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
