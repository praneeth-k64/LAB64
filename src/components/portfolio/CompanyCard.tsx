'use client';

import { useRef, useState, MouseEvent } from 'react';
import { PortfolioCompany } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { CardSpotlight } from '@/components/ui/card-spotlight';

interface CompanyCardProps {
  company: PortfolioCompany;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const isClickable = !company.comingSoon && company.websiteUrl;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const cardContent = (
    <CardSpotlight
      spotlightColor={company.brandColor ? `${company.brandColor}40` : 'rgba(255, 255, 255, 0.15)'}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative overflow-hidden rounded-2xl bg-white shadow-lg',
          'transition-all duration-300 ease-out',
          'hover:shadow-2xl hover:-translate-y-2',
          'min-h-[400px] flex flex-col',
          isClickable ? 'cursor-pointer' : 'cursor-default'
        )}
        style={{
          borderColor: company.brandColor || '#667eea',
          borderWidth: '1px',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
          transformStyle: 'preserve-3d',
        }}
      >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${company.backgroundImage})`,
            filter: 'brightness(0.7)',
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />
      </div>


      {/* Card Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-6 text-white">
        {/* Company Logo Placeholder */}
        <div className="mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {company.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Company Name */}
        <h3 className="text-2xl font-rajdhani font-bold mb-2">{company.name}</h3>

        {/* Tagline */}
        <p className="text-lg text-white/90 mb-3 font-rajdhani font-semibold">{company.tagline}</p>

        {/* Description */}
        <p className="text-sm text-white/80 leading-relaxed font-ibm-plex-sans">
          {company.description}
        </p>

        {/* Focus Area */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium font-ibm-plex-sans">
            {company.focusArea}
          </span>
        </div>
      </div>
      </div>
    </CardSpotlight>
  );

  if (isClickable && company.websiteUrl) {
    return (
      <a
        href={company.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
