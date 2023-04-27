import { createSlice } from '@reduxjs/toolkit';
import { createMaterial, deleteMaterial, getAuthors, getHomepageSecondaryMaterials, getMaterials, getRecentMaterials, updateMaterial } from './asyncActions';
import { IMaterialsState } from './types';


const initialState: IMaterialsState = {
  status: 'idle',
  data: {
    main: {
      materials: [],
      materialsCount: 0
    },
    homepage: {
      topMaterials: [],
      latestPosts: [],
      leagueMaterials: []
    }
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
        state.data.main.materials.push(action.payload);
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
        state.data.main = action.payload;
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
        state.data.main.materials = action.payload;
      })
      .addCase(getRecentMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getHomepageSecondaryMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getHomepageSecondaryMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.homepage = action.payload;
      })
      .addCase(getHomepageSecondaryMaterials.rejected, (state, action: any) => {
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
        state.data.main.materials = state.data.main.materials.map(material => material._id === action.payload._id ? action.payload : material);
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
        state.data.main = action.payload;
      })
      .addCase(deleteMaterial.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearError } = materialsSlice.actions;

export default materialsSlice.reducer;