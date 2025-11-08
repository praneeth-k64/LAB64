import { HolographicGlitchLogo } from '../ui/logo-animations/HolographicGlitchLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <HolographicGlitchLogo width="140px" height="50px" />
            <p className="text-gray-400 font-ibm-plex-sans text-sm">
              &copy; {currentYear} LAB64. All rights reserved.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-gray-400 font-ibm-plex-sans text-sm">
            <a
              href="mailto:contact@lab64.cz"
              className="hover:text-white transition-colors"
            >
              contact@lab64.cz
            </a>
            <span className="hidden md:inline">•</span>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <span className="whitespace-nowrap">🇨🇿 Prague</span>
              <span>•</span>
              <span className="whitespace-nowrap">🇮🇳 Hyderabad</span>
              <span>•</span>
              <span className="whitespace-nowrap">🇫🇷 Paris</span>
              <span>•</span>
              <span className="whitespace-nowrap">🇩🇪 Berlin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
