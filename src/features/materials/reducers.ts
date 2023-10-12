import { createSlice } from '@reduxjs/toolkit';
import { 
  createMaterial, deleteMaterial, getAuthors, getHomepageSecondaryMaterials, 
  getLeagueMaterials, getMaterial, getMaterials, getRecentMaterials, getSearchValues, 
  searchMaterials, searchRecentMaterials, updateMaterial, updateViewedMaterial 
} from './asyncActions';
import { IMaterialsState } from './types';
import { StateStatus } from '../types';


const initialState: IMaterialsState = {
  status: StateStatus.Idle,
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
        state.status = StateStatus.Loading;
      })
      .addCase(createMaterial.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.materials.push(action.payload);
      })
      .addCase(createMaterial.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main = action.payload;
      })
      .addCase(getMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getMaterial.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getMaterial.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.material = action.payload;
      })
      .addCase(getMaterial.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getRecentMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getRecentMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.materials = action.payload;
      })
      .addCase(getRecentMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getHomepageSecondaryMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getHomepageSecondaryMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.homepage = action.payload;
      })
      .addCase(getHomepageSecondaryMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getLeagueMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getLeagueMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.materials = action.payload;
      })
      .addCase(getLeagueMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getAuthors.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getAuthors.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.authors = action.payload;
      })
      .addCase(getAuthors.rejected, (state, action: any) =>{
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getSearchValues.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getSearchValues.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.searchValues = action.payload;
      })
      .addCase(getSearchValues.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(searchMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(searchMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.search = action.payload;
      })
      .addCase(searchMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(searchRecentMaterials.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(searchRecentMaterials.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.search = action.payload;
      })
      .addCase(searchRecentMaterials.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updateViewedMaterial.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updateViewedMaterial.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.material = action.payload;
      })
      .addCase(updateViewedMaterial.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updateMaterial.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updateMaterial.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.materials = state.data.main.materials.map(material => material._id === action.payload._id ? action.payload : material);
      })
      .addCase(updateMaterial.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(deleteMaterial.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(deleteMaterial.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        // state.data.main = action.payload;
        state.data.main = {
          materials: state.data.main.materials.filter(material => material._id !== action.payload),
          materialsCount: state.data.main.materialsCount - 1
        }
      })
      .addCase(deleteMaterial.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
  }
});

export const { clearMaterial, setFilters, clearFilters, clearSearchValues, clearSearch, clearError } = materialsSlice.actions;

export default materialsSlice.reducer;