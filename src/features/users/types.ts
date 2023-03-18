export interface IUserInitialState {
  status: string,
  user: IUser | null,
  data: {
    users: IUserResponseData[],
    usersCount: number
  },
  filters: IUserFiltersData | null,
  error: string | null
}

export interface IUserResponseData {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userPhotoUrl?: string,
  role?: string,
  location?: string,
  organization?: string,
  position?: string,
  createdAt: string
}

export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userPhotoUrl?: string,
  role?: string,
  location?: string,
  organization?: string,
  position?: string
}

export interface ILoginCredentials {
  email: string,
  password: string
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface IUsersTableHeadCell {
  title: string, 
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface IUserRequestData {
  page: number,
  itemsPerPage: number,
  filterData: any | null, 
  sortData: {
    indicator: string,
    order: string
  } | null
}

export interface IUserFiltersData {
  organization?: string,
  country?: string,
  dateFrom?: string,
  dateTo?: string
}