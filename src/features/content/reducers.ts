import { createSlice } from '@reduxjs/toolkit';
import { IContentSectionsInitialState } from './types';
import { createContentSection, deleteContentSection, getContentSections, updateContentSection } from './asyncActions';
import { StateStatus } from '../types';


const initialState: IContentSectionsInitialState = {
  status: StateStatus.Idle,
  content: [],
  materialsToContent: [],
  isContentEditingModeActive: false,
  error: null
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addMaterialToContent: (state, action) => {
      state.materialsToContent.includes(action.payload) ? 
        state.materialsToContent = state.materialsToContent.filter(id => id !== action.payload) : 
        state.materialsToContent.push(action.payload);
    },
    setMaterialsToContentToUpdate: (state, action) => {
      state.materialsToContent = action.payload;
    },
    clearMaterialsToContent: (state) => {
      state.materialsToContent = [];
    },
    handleEditingMode: (state, action) => {
      state.isContentEditingModeActive = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.status = StateStatus.Idle;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContentSection.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(createContentSection.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.content.push(action.payload);
      })
      .addCase(createContentSection.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getContentSections.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getContentSections.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.content = action.payload;
      })
      .addCase(getContentSections.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updateContentSection.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updateContentSection.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.content = state.content.map(section => section._id === action.payload._id ? action.payload : section);
      })
      .addCase(updateContentSection.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(deleteContentSection.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(deleteContentSection.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.content = state.content.filter(section => section._id !== action.payload);
      })
      .addCase(deleteContentSection.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
  }
});

export const { 
  addMaterialToContent, 
  setMaterialsToContentToUpdate,
  clearMaterialsToContent, 
  handleEditingMode, 
  setError, 
  clearError 
} = contentSlice.actions;

export default contentSlice.reducer;