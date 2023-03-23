export interface ICLubsInitialState {
  status: string,
  data: {
    clubs: IClub[],
    clubsCount: number
  },
  filters: IClubFilters | null,
  clubsByCountry: IClub[],
  error: string | null
}

export interface IClubFilters {
  competition?: string,
  country?: string
}

export interface IClubsRequestData {
  page: number,
  itemsPerPage: number,
  filterData: IClubFilters | null, 
  sortData: {
    indicator: string,
    order: string
  } | null
}

export interface IClub {
  _id: string,
  fullName: string,
  commonName: string,
  shortName: string,
  country: string,
  clubLogoUrl: string,
  stadium: string,
  createdAt?: string,
  updatedAt?: string
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface IClubsTableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface IDeleteClubData {
  id: string,
  page: number,
  itemsPerPage: number
}