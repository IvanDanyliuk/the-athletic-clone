import { RootState } from '../store';

export const selectMaterials = (state: RootState) => state.materials.data.main.materials;
export const selectMaterial = (state: RootState) => state.materials.data.material;
export const selectHomepageSecondaryMaterials = (state: RootState) => state.materials.data.homepage;
export const selectMaterialsCount = (state: RootState) => state.materials.data.main.materialsCount;
export const selectMaterialsStatus = (state: RootState) => state.materials.status;
export const selectFilters = (state: RootState) => state.materials.filters;
export const selectSearchValues = (state: RootState) => state.materials.searchValues;
export const selectAuthors = (state: RootState) => state.materials.authors;
export const selectMaterialsError = (state: RootState) => state.materials.error;