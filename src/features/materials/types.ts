import { Order, StateStatus } from '../types';
import { IUser } from '../users/types';

export interface IMaterialsState {
  status: StateStatus;
  data: {
    main: {
      materials: IMaterial[];
      materialsCount: number
    };
    material: IMaterial | null;
    homepage: {
      topMaterials: IMaterial[];
      latestPosts: IMaterial[];
      mustRead: IMaterial | null;
      leagueMaterials: {
        league: string;
        logo: string;
        materials: IMaterial[]
      }[]
    }
  };
  filters: MaterialFilterData | null;
  searchValues: any;
  search: IMaterial[] | null;
  authors: {
    name: string;
    userId: string;
  }[];
  error: string | null
}

export interface IMaterialsRequestData {
  page: number;
  itemsPerPage: number;
  filterData: any | null; 
  sortData: {
    indicator: string;
    order: string
  } | null
}

export interface IRecentMaterialsRequestData {
  materialsNumber: number;
  materialTypes: string[]
}

export enum MaterialPublicationStatus {
  Published = 'published',
  NotPublished = 'not-published'
}

export interface IHomepageSecondaryMaterialsRequestData {
  topMaterialsNum: number;
  postsNum: number
}

export interface IMaterial {
  _id: string;
  author: IUser, 
  type: string;
  title: string;
  content: string;
  preview?: string;
  image?: any;
  isMain?: boolean;
  status: string;
  views: number;
  likes: string[];
  publicationDate: string | any;
  comments: IComment[];
  labels: string[];
  createdAt: string;
  updatedAt: string
}

export interface ISortMaterialRequestData {
  indicator: string;
  order: string
}

export interface ILikeMaterialData {
  userId: string;
  materialId: string
}

export interface IDeleteMaterialData {
  id: string;
  page: number;
  itemsPerPage: number,
  userId?: string
}

export interface IMaterialsTableHeadCell {
  title: string;
  isSortable: boolean;
  sortKey?: string;
  order?: Order
}

export interface MaterialFilterData {
  type?: string;
  dateFrom?: string;
  dateTo?: string;
  author?: string
}

export interface IComment {
  id: string;
  userId: string;
  userImage: string;
  userName: string;
  message: string
}

export interface IMaterialSearchData {
  value: string | string[];
  type: string | string[];
}

export interface IGetLeagueMaterialsRequest {
  value: string | string[];
  type: string[];
  materialsNum?: number;
}