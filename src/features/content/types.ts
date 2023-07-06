import { IMaterial } from "../materials/types";
import { Order, StateStatus } from "../types";


export interface IContentSectionsInitialState {
  status: StateStatus,
  content: IContentSection[],
  materialsToContent: string[],
  isContentEditingModeActive: boolean,
  error: null | string
}

export interface IContentSection {
  _id: string,
  name: string,
  maxLength: number,
  materials: IMaterial[],
  createdAt: string
}

export interface IContentSectionToUpdate {
  _id: string,
  name: string,
  maxLength: number,
  materials: string[],
  createdAt: string
}

export interface IContentTableHeadCell {
  title: string, 
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}