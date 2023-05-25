import { IClub } from "../clubs/types"

export interface ICompetition {
  _id: string,
  fullName: string,
  shortName: string,
  country: string,
  clubs: IClub[],
  logoUrl: string,
  type: string,
  createdAt: string
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface ICompetitionsTableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface ICompetitionsInitialState {
  status: string,
  data: {
    main: {
      competitions: ICompetition[],
      competitionsCount: number
    },
    competition: ICompetition | null
  },
  filters: ICompetitionsFilters | null,
  error: string | null
}

export interface ICompetitionsFilters {
  type?: string,
  country?: string
}

export interface ICompetitionsRequestData {
  page: number,
  itemsPerPage: number,
  filterData: ICompetitionsFilters | null, 
  sortData: {
    indicator: string,
    order: string
  } | null
}

export interface ICompetitionDeleteQuery {
  id: string,
  page: number,
  itemsPerPage: number
}