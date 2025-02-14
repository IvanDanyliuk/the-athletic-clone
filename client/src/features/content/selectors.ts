import { RootState } from '../store';


export const selectContentStatus = (state: RootState) => state.content.status;
export const selectContent = (state: RootState) => state.content.content;
export const selectMaterialsToContent = (state: RootState) => state.content.materialsToContent;
export const selectContentModeStatus = (state: RootState) => state.content.isContentEditingModeActive;
export const selectContentError = (state: RootState) => state.content.error;