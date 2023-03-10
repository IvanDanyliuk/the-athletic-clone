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
    name: string,
    photoUrl?: string,
    organization: string,
    position: string,
  }, 
  type: string,
  title: string,
  content: string,
  image?: any,
  views: number,
  likes: number,
  publicationDate: string,
  comments: {
    user: string, 
    message: string
  }[],
  labels: string[],
}