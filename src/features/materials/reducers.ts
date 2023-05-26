import { createSlice } from '@reduxjs/toolkit';
import { 
  createMaterial, deleteMaterial, getAuthors, getHomepageSecondaryMaterials, 
  getLeagueMaterials, getMaterial, getMaterials, getRecentMaterials, getSearchValues, 
  searchMaterials, searchRecentMaterials, updateMaterial, updateViewedMaterial 
} from './asyncActions';
import { IMaterialsState } from './types';


const initialState: IMaterialsState = {
  status: 'idle',
  data: {
    main: {
      materials: [],
      materialsCount: 0
    },
    material: null,
    homepage: {
      topMaterials: [],
      latestPosts: [],
      mustRead: null,
      leagueMaterials: []
    }
  },
  filters: null,
  searchValues: null,
  search: null,
  authors: [],
  error: null
}

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    clearMaterial: (state) => {
      state.data.material = null;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = null;
    },
    clearSearchValues: (state) => {
      state.searchValues = null;
    },
    clearSearch: (state) => {
      state.search = null;
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
      .addCase(getMaterial.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getMaterial.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.material = action.payload;
      })
      .addCase(getMaterial.rejected, (state, action: any) => {
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
      .addCase(getLeagueMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getLeagueMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.materials = action.payload;
      })
      .addCase(getLeagueMaterials.rejected, (state, action: any) => {
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
      .addCase(getSearchValues.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSearchValues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchValues = action.payload;
      })
      .addCase(getSearchValues.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(searchMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.search = action.payload;
      })
      .addCase(searchMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(searchRecentMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchRecentMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.search = action.payload;
      })
      .addCase(searchRecentMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateViewedMaterial.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateViewedMaterial.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.material = action.payload;
      })
      .addCase(updateViewedMaterial.rejected, (state, action: any) => {
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

export const { clearMaterial, setFilters, clearFilters, clearSearchValues, clearSearch, clearError } = materialsSlice.actions;

export default materialsSlice.reducer;