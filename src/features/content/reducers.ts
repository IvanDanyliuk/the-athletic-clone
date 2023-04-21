import { createSlice } from '@reduxjs/toolkit';
import { IContentSectionsInitialState } from './types';
import { createContentSection, deleteContentSection, getContentSections, updateContentSection } from './asyncActions';


const initialState: IContentSectionsInitialState = {
  status: 'idle',
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
      state.status = action.payload;
    },
    clearError: (state, action) => {
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContentSection.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createContentSection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content.push(action.payload);
      })
      .addCase(createContentSection.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getContentSections.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getContentSections.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content = action.payload;
      })
      .addCase(getContentSections.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateContentSection.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateContentSection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content = action.payload;
      })
      .addCase(updateContentSection.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteContentSection.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteContentSection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content = state.content.filter(section => section._id !== action.payload);
      })
      .addCase(deleteContentSection.rejected, (state, action: any) => {
        state.status = 'failed';
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