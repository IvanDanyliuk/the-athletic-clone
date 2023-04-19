import { createSlice } from '@reduxjs/toolkit';
import { IContentSectionsInitialState } from './types';


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
    // builder
    //   .addCase()
  }
});

export const { addMaterialToContent, clearMaterialsToContent, handleEditingMode, setError, clearError } = contentSlice.actions;

export default contentSlice.reducer;