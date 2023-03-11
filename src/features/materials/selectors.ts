import { RootState } from '../store';

export const selectMaterials = (state: RootState) => state.materials.data.materials;