export interface Competition {
  count: number;
  filters: Filters;
  competitions: CompetitionElement[];
}

export interface CompetitionElement {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: Type;
  emblem: string;
  plan: Plan;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: null | string;
}

export interface CurrentSeason {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: null;
}

export enum Plan {
  TierOne = 'TIER_ONE',
}

export enum Type {
  Cup = 'CUP',
  League = 'LEAGUE',
}

export interface Filters {
  client: string;
}
