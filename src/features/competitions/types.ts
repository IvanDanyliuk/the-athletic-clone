import { IClub } from '../clubs/types'
import { Order, StateStatus } from '../types'

export interface ICompetition {
  _id: string;
  fullName: string;
  shortName: string;
  country: string;
  clubs: IClub[];
  logoUrl: string;
  type: string;
  createdAt: string;
}

export interface ICompetitionsTableHeadCell {
  title: string;
  isSortable: boolean;
  sortKey?: string;
  order?: Order;
}

export interface ICompetitionsInitialState {
  status: StateStatus;
  data: {
    main: {
      competitions: ICompetition[];
      competitionsCount: number;
    };
    competition: ICompetition | null;
  };
  filters: ICompetitionsFilters | null;
  error: string | null;
}

export enum CompetitionTypes {
  league = 'league',
  cup = 'cup'
}

export interface ICompetitionsFilters {
  type?: string;
  country?: string;
}

export interface ICompetitionsRequestData {
  page: number;
  itemsPerPage: number;
  filterData: ICompetitionsFilters | null; 
  sortData: {
    indicator: string;
    order: string;
  } | null;
}

export interface ICompetitionDeleteQuery {
  id: string;
  page: number;
  itemsPerPage: number;
}

export interface StandingItem {
  _id: string;
  club: IClub;
  playedMatches: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  wins: number;
  loses: number;
  draws: number;
  latestGames: string[];
}