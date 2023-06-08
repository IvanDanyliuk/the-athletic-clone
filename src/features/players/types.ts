import { ClubModel } from "../../app/models/components";

export interface IPlayer {
  _id: string,
  firstName: string,
  lastName: string,
  birthDate: string | any,
  country: string,
  photoUrl: string,
  number: string,
  position: string,
  club: string,
  createdAt: string
}

export interface IPlayerInitialState {
  status: string,
  data: {
    players: IPlayer[],
    playersCount: number
  },
  filters: {} | null,
  error: string | null
}

export enum PlayerPosition {
  goalkeeper = 'GK',
  defender = 'D',
  midfielder = 'M',
  attack = 'A'
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface IPlayersTableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface IPlayersFilters {
  club?: string,
  position?: string,
  country?: string,
  dateFrom?: string,
  dateTo?: string,
}

export interface IPlayersRequestData {
  page?: number,
  itemsPerPage?: number,
  filterData?: IPlayersFilters | null, 
  sortData?: {
    indicator: string,
    order: string
  } | null
}

export interface IDeletePlayerData {
  id: string,
  page: number,
  itemsPerPage: number
}