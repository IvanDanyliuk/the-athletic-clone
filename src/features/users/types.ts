export interface IUserInitialState {
  status: string,
  user: IUser | null,
  data: {
    users: IUser[],
    usersCount: number
  },
  filters: IUserFiltersData | null,
  countries: string[],
  error: string | null
}

export interface IUser {
  _id?: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userPhotoUrl?: string,
  role?: string,
  location?: string,
  organization?: string,
  position?: string,
  createdAt?: string
}

export interface ILoginCredentials {
  email: string,
  password: string
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export enum UserRoles {
  admin = 'admin',
  author = 'author',
  reader = 'reader'
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
  role?: string,
  location?: string,
  dateFrom?: string,
  dateTo?: string
}

export interface IUserPasswordUpdationData {
  id: string,
  newPassword: string,
  currPassword: string
}

export interface IDeleteUserData {
  id: string,
  page: number,
  itemsPerPage: number
}