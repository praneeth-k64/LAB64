import { LiquidMetalLogo } from '../ui/LiquidMetalLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <LiquidMetalLogo width="140px" height="50px" />
            </div>
            <p className="text-gray-400 leading-relaxed font-ibm-plex-sans">
              Pioneering the future with cutting-edge AI and drone technology solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-rajdhani font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-ibm-plex-sans">
              <li>contact@lab64.ai</li>
              <li>+1-XXX-XXX-XXXX</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-rajdhani font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 font-ibm-plex-sans">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 font-ibm-plex-sans">
          <p>&copy; {currentYear} LAB64. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
