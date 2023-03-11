import { createSlice } from '@reduxjs/toolkit';
import { createMaterial, getAllMaterials } from './asyncActions';
import { IMaterialsState } from './types';


const initialState: IMaterialsState = {
  status: 'idle',
  data: {
    materials: [],
    pages: 0
  },
  error: null
}

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {},
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
      .addCase(getAllMaterials.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllMaterials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllMaterials.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

// export const { } = materialsSlice.actions;

export default materialsSlice.reducer;