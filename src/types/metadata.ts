/**
 * LAB64 Company Metadata Types
 * Based on data-model.md specification
 */

export interface LAB64Metadata {
  /**
   * Company name
   */
  companyName: string;

  /**
   * Primary tagline for hero section
   * Max length: 100 characters
   */
  tagline: string;

  /**
   * Mission/vision statement
   * Displayed in About section
   * Max length: 300 characters
   */
  missionStatement: string;

  /**
   * Contact information
   */
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };

  /**
   * Social media links
   */
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };

  /**
   * SEO metadata
   */
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}
