import { IClub } from "../clubs/types"
import { ICompetition } from "../competitions/types"

export interface ISchedule {
  _id: string,
  competition: ICompetition,
  season: string,
  fixture: IMatchweek[],
  createdAt: string
}

export interface IMatch {
  id: string,
  home: IClub,
  away: IClub,
  date: string,
  location: string,
  score: string
}

export interface IMatchweek {
  id: string,
  matchweekName: string,
  games: IMatch[]
}
export interface ISchedulesInitialState {
  status: string,
  data: {
    schedules: ISchedule[],
    schedulesCount: number
  },
  filters: {} | null,
  error: string | null
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface ISchedulesTableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface ISchedulesFilters {
  competition?: string,
  country?: string,
  dateFrom?: string,
  dateTo?: string,
}

export interface ISchedulesRequestData {
  page: number,
  itemsPerPage: number,
  filterData: ISchedulesFilters | null, 
  sortData: {
    indicator: string,
    order: string
  } | null
}

export interface IDeleteScheduleData {
  id: string,
  page: number,
  itemsPerPage: number
}