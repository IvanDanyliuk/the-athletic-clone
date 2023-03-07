//ENTITIES
export interface ClubModel {
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
    firstName: string,
    lastName: string,
    photoUrl?: string,
    organization: string,
    position: string,
  }, 
  type: string,
  title: string,
  text: string,
  image?: string,
  views: number,
  likes: number,
  comments: {
    user: string, 
    message: string
  }[],
  labels: string[],
}