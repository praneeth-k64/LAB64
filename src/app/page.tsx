import { HeroSection } from '@/components/hero/HeroSection';
import { CompanyGrid } from '@/components/portfolio/CompanyGrid';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { getAllCompanies } from '@/lib/portfolio';

export default function HomePage() {
  const companies = getAllCompanies();

  return (
    <>
      <OrganizationSchema />
      <Navigation />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <CompanyGrid companies={companies} />
        <Footer />
      </main>
    </>
  );
}
