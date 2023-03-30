import { IClub } from "../clubs/types"

export interface ISchedule {
  _id: string,
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