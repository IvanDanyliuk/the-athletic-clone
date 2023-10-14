import { IClub } from '../clubs/types';
import { Order, StateStatus } from '../types';

export interface IPlayer {
  _id: string;
  firstName: string;
  lastName: string;
  birthDate: string | any;
  country: string;
  photoUrl: string;
  number: string;
  position: string;
  club: IClub;
  createdAt: string;
}

export interface IPlayerInitialState {
  status: StateStatus;
  data: {
    main: {
      players: IPlayer[];
      playersCount: number;
    };
    player: IPlayer | null;
  };
  filters: {} | null;
  error: string | null;
}

export enum PlayerPosition {
  goalkeeper = 'GK',
  defender = 'D',
  midfielder = 'M',
  attack = 'A'
}

export interface IPlayersTableHeadCell {
  title: string;
  isSortable: boolean;
  sortKey?: string;
  order?: Order;
}

export interface IPlayersFilters {
  club?: string;
  position?: string;
  country?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface IPlayersRequestData {
  page?: number;
  itemsPerPage?: number;
  filterData?: IPlayersFilters | null;
  sortData?: {
    indicator: string;
    order: string;
  } | null;
}