import { ClubModel } from "../../app/models/components";

export interface ICompetition {
  _id: string,
  fullName: string,
  shortName: string,
  country: string,
  clubs: string[],
  logoUrl: string,
  type: string,
  createdAt: string
}

export interface ICompetitionsInitialState {
  status: string,
  data: {
    competitions: ICompetition[],
    competitionsCount: number
  },
  filters: {
    country?: string,
    type?: string
  } | null,
  error: string | null
}