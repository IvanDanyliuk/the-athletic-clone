import { RootState } from '../store';

export const selectMaterials = (state: RootState) => state.materials.data.materials;
export const selectMaterialsCount = (state: RootState) => state.materials.data.materialsCount;
export const selectMaterialsStatus = (state: RootState) => state.materials.status;
export const selectFilters = (state: RootState) => state.materials.filters;
export const selectMaterialsError = (state: RootState) => state.materials.error;