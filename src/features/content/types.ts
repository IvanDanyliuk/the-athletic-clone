import { IMaterial } from "../materials/types";


export interface IContentSectionsInitialState {
  status: string,
  sections: IContentSection[],
  error: null | string
}

export interface IContentSection {
  _id: string,
  name: string,
  maxLength: number,
  materials: IMaterial[],
  createdAt: string
}