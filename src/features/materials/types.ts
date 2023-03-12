import { MaterialModel } from "../../app/models/components";

export interface IMaterialsState {
  status: string,
  data: {
    materials: MaterialModel[],
    materialsCount: number
  },
  error: string | null
}

export interface IMaterialsRequestData {
  page: number,
  itemsPerPage: number,
  filterData?: any
}