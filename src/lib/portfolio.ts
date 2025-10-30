/**
 * Portfolio Data Access Functions
 * Based on data-model.md specification
 */

import portfolioData from '@/../../data/portfolio-companies.json';
import { PortfolioCompany, PortfolioData } from '@/types/portfolio';

const data: PortfolioData = portfolioData as PortfolioData;

/**
 * Get all portfolio companies sorted by display order
 * @returns Array of all portfolio companies
 */
export function getAllCompanies(): PortfolioCompany[] {
  return data.companies.sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get only active companies (not coming soon)
 * @returns Array of active portfolio companies
 */
export function getActiveCompanies(): PortfolioCompany[] {
  return getAllCompanies().filter((company) => !company.comingSoon);
}

/**
 * Get a single company by ID
 * @param id - Company ID
 * @returns Portfolio company or undefined if not found
 */
export function getCompanyById(id: string): PortfolioCompany | undefined {
  return data.companies.find((company) => company.id === id);
}

/**
 * Get companies by focus area
 * @param focusArea - Focus area to filter by
 * @returns Array of companies matching the focus area
 */
export function getCompaniesByFocus(focusArea: string): PortfolioCompany[] {
  return getAllCompanies().filter((company) => company.focusArea === focusArea);
}

/**
 * Get the total number of companies
 * @returns Total number of companies
 */
export function getCompanyCount(): number {
  return data.companies.length;
}

/**
 * Get the last updated timestamp
 * @returns ISO timestamp string
 */
export function getLastUpdated(): string {
  return data.lastUpdated;
}
