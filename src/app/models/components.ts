import { IClub } from "../../features/clubs/types"

//ENTITIES
export interface ClubModel {
  fullName: string,
  commonName: string,
  shortName: string,
  country: string,
  clubLogoUrl: string,
  stadium: string,
}

export interface CompetitionModel {
  fullName: string,
  shortName: string,
  country: string,
  clubs: ClubModel[],
  logoUrl: string,
  type: string,
}

export interface MaterialModel {
  author: { 
    name: string,
    photoUrl?: string,
    organization: string,
    position: string,
  }, 
  type: MaterialType,
  title: string,
  content: string,
  image?: any,
  status: string,
  views: number,
  likes: number,
  publicationDate: string,
  comments: {
    user: string, 
    message: string
  }[],
  labels: string[],
}

export enum MaterialType {
  article = 'article',
  note = 'note',
  post = 'post'
}

export interface PlayerModel {
  firstName: string,
  lastName: string,
  birthDate: string,
  country: string,
  photoUrl: string,
  number: string,
  position: string,
  club: string,
}

export interface ScheduleModel {
  competition: string,
  season: string,
  fixture: {
    id: string,
    matchweekName: string,
    games: {
      id: string,
      home: IClub,
      away: IClub,
      date: string,
      location: string,
      score: string,
    }[]
  }[]
}