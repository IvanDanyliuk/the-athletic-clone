import { ClubModel } from "../../app/models/components";

export interface IPlayer {
  _id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
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