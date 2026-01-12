export interface Country {
  name: string;
  population: number;
  code: string;
}

export interface USState {
  name: string;
  population: number;
  code: string;
}

export interface USCounty {
  name: string;
  state: string;
  population: number;
}

export interface PopulationComparison {
  name: string;
  population: number;
  type: 'country' | 'state' | 'county';
  isLarger: boolean;
  difference: number;
  percentageDiff: number;
}

export interface ComparisonResult {
  followerCount: number;
  accountName: string;
  platform: 'youtube' | 'twitter';
  largerThan: PopulationComparison[];
  smallerThan: PopulationComparison[];
  closestMatch: PopulationComparison | null;
}

export type ComparisonCategory = 'countries' | 'states' | 'counties' | 'all';
