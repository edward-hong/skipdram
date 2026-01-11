import type {
  Country,
  USState,
  USCounty,
  PopulationComparison,
  ComparisonResult,
  ComparisonCategory
} from '../types/population';

import countriesData from '../data/countries.json';
import statesData from '../data/us-states.json';
import countiesData from '../data/us-counties.json';

const countries: Country[] = countriesData;
const states: USState[] = statesData;
const counties: USCounty[] = countiesData;

function createComparison(
  name: string,
  population: number,
  type: 'country' | 'state' | 'county',
  followerCount: number
): PopulationComparison {
  const isLarger = followerCount > population;
  const difference = Math.abs(followerCount - population);
  const percentageDiff = population > 0 ? (difference / population) * 100 : 0;

  return {
    name,
    population,
    type,
    isLarger,
    difference,
    percentageDiff,
  };
}

export function compareWithCountries(followerCount: number): PopulationComparison[] {
  return countries
    .map(country => createComparison(country.name, country.population, 'country', followerCount))
    .sort((a, b) => Math.abs(a.population - followerCount) - Math.abs(b.population - followerCount));
}

export function compareWithStates(followerCount: number): PopulationComparison[] {
  return states
    .map(state => createComparison(state.name, state.population, 'state', followerCount))
    .sort((a, b) => Math.abs(a.population - followerCount) - Math.abs(b.population - followerCount));
}

export function compareWithCounties(followerCount: number): PopulationComparison[] {
  return counties
    .map(county => createComparison(`${county.name}, ${county.state}`, county.population, 'county', followerCount))
    .sort((a, b) => Math.abs(a.population - followerCount) - Math.abs(b.population - followerCount));
}

export function getFullComparison(
  followerCount: number,
  accountName: string,
  platform: 'youtube' | 'twitter',
  category: ComparisonCategory = 'all'
): ComparisonResult {
  let allComparisons: PopulationComparison[] = [];

  if (category === 'all' || category === 'countries') {
    allComparisons = [...allComparisons, ...compareWithCountries(followerCount)];
  }
  if (category === 'all' || category === 'states') {
    allComparisons = [...allComparisons, ...compareWithStates(followerCount)];
  }
  if (category === 'all' || category === 'counties') {
    allComparisons = [...allComparisons, ...compareWithCounties(followerCount)];
  }

  // Sort by absolute difference to find closest match
  allComparisons.sort((a, b) =>
    Math.abs(a.population - followerCount) - Math.abs(b.population - followerCount)
  );

  const largerThan = allComparisons.filter(c => c.isLarger);
  const smallerThan = allComparisons.filter(c => !c.isLarger);
  const closestMatch = allComparisons[0] || null;

  return {
    followerCount,
    accountName,
    platform,
    largerThan,
    smallerThan,
    closestMatch,
  };
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  }
  return num.toString();
}

export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString();
}

export { countries, states, counties };
