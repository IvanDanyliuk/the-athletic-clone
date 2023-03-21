import { createSlice } from '@reduxjs/toolkit';
import { createClub } from './asyncActions';
import { ICLubsInitialState } from './types';


const initialState: ICLubsInitialState = {
  status: 'idle',
  data: {
    clubs: [],
    clubsCount: 0
  },
  filters: null,
  error: null
}


const clubSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(createClub.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

// export const {  } = clubSlice.actions;

export default clubSlice.reducer;