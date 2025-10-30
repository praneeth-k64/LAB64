'use client';

import { motion as m } from 'motion/react';
import { PortfolioCompany } from '@/types/portfolio';
import { Carousel, Card as AceternityCard, Card as CardType } from '@/components/ui/apple-cards-carousel';

interface CompanyGridProps {
  companies: PortfolioCompany[];
}

export function CompanyGrid({ companies }: CompanyGridProps) {
  // Transform portfolio companies into Aceternity Card format
  const cards = companies.map((company, index) => {
    const cardData: CardType = {
      src: company.backgroundImage,
      title: company.name,
      category: company.focusArea,
      content: (
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-rajdhani font-semibold text-white">
            {company.tagline}
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed font-ibm-plex-sans">
            {company.description}
          </p>
          {company.websiteUrl && !company.comingSoon && (
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-full font-medium font-ibm-plex-sans hover:bg-white/90 transition-all"
            >
              Visit Website
            </a>
          )}
          {company.comingSoon && (
            <div className="inline-block mt-4 px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium font-ibm-plex-sans">
              Coming Soon
            </div>
          )}
        </div>
      ),
    };

    return <AceternityCard key={company.id} card={cardData} index={index} />;
  });

  return (
    <section id="portfolio" className="bg-black py-16 overflow-hidden" aria-label="Portfolio companies">
      <div className="container mx-auto px-4">
        <m.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-white mb-4">
            Our Portfolio Companies
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-ibm-plex-sans">
            Discover our portfolio of innovative companies pushing the boundaries of technology
          </p>
        </m.div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}
