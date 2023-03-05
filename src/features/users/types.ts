export interface IUserInitialState {
  status: string,
  user: IUser | null,
  error: string | null
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