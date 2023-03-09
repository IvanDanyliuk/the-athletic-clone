import { MaterialModel } from "../../app/models/components";

export interface IMaterialsState {
  status: string,
  data: {
    materials: MaterialModel[],
    page: number
  },
  error: string | null
}