import { createSlice } from '@reduxjs/toolkit';
import { IContentSectionsInitialState } from './types';


const initialState: IContentSectionsInitialState = {
  status: 'idle',
  content: [],
  materialsToContent: [],
  error: null
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addMaterialToContent: (state, action) => {
      state.materialsToContent.push(action.payload);
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

export const { addMaterialToContent, setError, clearError } = contentSlice.actions;

export default contentSlice.reducer;