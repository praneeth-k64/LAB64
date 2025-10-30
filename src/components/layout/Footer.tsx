import { LiquidMetalLogo } from '../ui/LiquidMetalLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <LiquidMetalLogo width="140px" height="50px" />
            <p className="text-gray-400 font-ibm-plex-sans text-sm">
              &copy; {currentYear} LAB64. All rights reserved.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex items-center gap-6 text-gray-400 font-ibm-plex-sans text-sm">
            <a
              href="mailto:contact@lab64.cz"
              className="hover:text-white transition-colors"
            >
              contact@lab64.cz
            </a>
            <span className="hidden md:inline">•</span>
            <span>Prague, Czech Republic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
