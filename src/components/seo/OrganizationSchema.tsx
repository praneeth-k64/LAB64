export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LAB64',
    url: 'https://lab64.ai',
    logo: 'https://lab64.ai/lab64-logo.svg',
    description:
      'LAB64 is a visionary group company pioneering artificial intelligence, agentic systems, and drone communications technology.',
    areaServed: [
      'Czech Republic',
      'India',
      'France',
      'Germany',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Prague',
        addressCountry: 'CZ',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Berlin',
        addressCountry: 'DE',
      },
    ],
    sameAs: [
      'https://linkedin.com/company/lab64',
      'https://twitter.com/lab64',
      'https://github.com/lab64',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@lab64.ai',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
