import { MaterialModel } from "../../app/models/components";

export interface IMaterialsState {
  status: string,
  data: {
    materials: IMaterial[],
    materialsCount: number
  },
  error: string | null
}

export interface IMaterialsRequestData {
  page: number,
  itemsPerPage: number,
  filterData?: any, 
  sortData?: {
    indicator: string,
    order: string
  }
}

export interface IMaterial {
  _id: string,
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
  status: string,
  views: number,
  likes: number,
  publicationDate: string,
  comments: {
    user: string, 
    message: string
  }[],
  labels: string[],
  createdAt: string,
  updatedAt: string
}

export interface ISortMaterialRequestData {
  indicator: string,
  order: string
}

export interface IDeleteMaterialData {
  id: string,
  page: number,
  itemsPerPage: number
}