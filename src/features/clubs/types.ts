export interface ICLubsInitialState {
  status: string,
  data: {
    clubs: IClub[],
    clubsCount: number
  },
  filters: IClubFilters | null,
  error: string | null
}

export interface IClubFilters {
  competition?: string,
  country?: string
}

export interface IClub {
  _id?: string,
  fullName: string,
  commonName: string,
  shortName: string,
  country: string,
  clubLogoUrl: string,
  stadium: string,
  createdAt?: string,
  updatedAt?: string
}