import { createSlice } from '@reduxjs/toolkit';
import { createMaterial, deleteMaterial, getAuthors, getMaterials, getRecentMaterials, updateMaterial } from './asyncActions';
import { IMaterialsState } from './types';


const initialState: IMaterialsState = {
  status: 'idle',
  data: {
    materials: [],
    materialsCount: 0
  },
  filters: null,
  authors: [],
  error: null
}

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMaterial.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createMaterial.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.materials.push(action.payload);
      })
      .addCase(createMaterial.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getRecentMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getRecentMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.materials = action.payload;
      })
      .addCase(getRecentMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getAuthors.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.authors = action.payload;
      })
      .addCase(getAuthors.rejected, (state, action: any) =>{
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateMaterial.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateMaterial.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.materials = state.data.materials.map(material => material._id === action.payload._id ? action.payload : material);
      })
      .addCase(updateMaterial.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteMaterial.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteMaterial.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteMaterial.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearError } = materialsSlice.actions;

export default materialsSlice.reducer;