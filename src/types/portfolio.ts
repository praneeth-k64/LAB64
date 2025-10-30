/**
 * Portfolio Company Data Types
 * Based on data-model.md specification
 */

export interface PortfolioCompany {
  /**
   * Unique identifier for the company
   * Used as React key and for routing/analytics
   */
  id: string;

  /**
   * Company name (displayed as card title)
   * Example: "LAB64 AI", "LAB64 Aerospace"
   */
  name: string;

  /**
   * Short tagline (1-2 sentences)
   * Displayed below company name
   * Max length: 100 characters
   */
  tagline: string;

  /**
   * Brief description of company focus
   * Displayed on card
   * Max length: 200 characters
   */
  description: string;

  /**
   * Focus area or industry category
   * Example: "Artificial Intelligence & Agentic Systems"
   * Used for categorization/filtering (future)
   */
  focusArea: string;

  /**
   * External website URL
   * Must be valid HTTPS URL
   * null if website not yet available
   */
  websiteUrl: string | null;

  /**
   * Path to company logo image
   * Format: /companies/[company-id]-logo.svg
   * Used in card header
   */
  logoUrl: string;

  /**
   * Path to full-coverage background image
   * Format: /companies/[company-id]-bg.avif
   * Displayed as card background with gradient overlay
   */
  backgroundImage: string;

  /**
   * Whether website is coming soon
   * If true, card is non-clickable and shows badge
   */
  comingSoon: boolean;

  /**
   * Display order on landing page
   * Lower numbers appear first
   * Allows manual curation of company order
   */
  displayOrder: number;

  /**
   * Optional hex color for brand accent
   * Used for hover effects, borders, etc.
   * Example: "#667eea"
   */
  brandColor?: string;
}

export interface PortfolioData {
  /**
   * Schema version for future migrations
   */
  version: string;

  /**
   * Last updated timestamp
   */
  lastUpdated: string;

  /**
   * Array of portfolio companies
   */
  companies: PortfolioCompany[];
}
