export interface UserModel {
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