import { MaterialModel } from "../../app/models/components";

export interface IMaterialsState {
  status: string,
  data: {
    main: {
      materials: IMaterial[],
      materialsCount: number
    },
    homepage: {
      topMaterials: IMaterial[],
      latestPosts: IMaterial[],
      leagueMaterials: {
        league: string,
        logo: string,
        materials: IMaterial[]
      }[]
    }
  },
  filters: MaterialFilterData | null,
  authors: string[],
  error: string | null
}

export interface IMaterialsRequestData {
  page: number,
  itemsPerPage: number,
  filterData: any | null, 
  sortData: {
    indicator: string,
    order: string
  } | null
}

export interface IRecentMaterialsRequestData {
  materialsNumber: number,
  materialTypes: string[]
}

export interface IHomepageSecondaryMaterialsRequestData {
  topMaterialsNum: number,
  postsNum: number
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
  preview?: string,
  image?: any,
  status: string,
  views: number,
  likes: number,
  publicationDate: string | any,
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

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface IMaterialsTableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

export interface MaterialFilterData {
  type?: string,
  dateFrom?: string,
  dateTo?: string,
  author?: string
}