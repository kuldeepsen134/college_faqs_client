import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../api/axios';

const initialState = {
  loading: false,
  search: {}
}

export const headerSearch = createAsyncThunk("collage/college-list", async (data, { rejectWithValue }) => {
  try {
    const response = await instance.post("/college-list", data);
    const serializedData = {
      data: response.data,
      status: response.status,
    };

    return serializedData;
  } catch (error) {
    return rejectWithValue(error.response);
  }
}
);


const commonSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(headerSearch.pending, (state) => {
        state.search = {}
        state.loading = true

      })
      .addCase(headerSearch.fulfilled, (state, action) => {
        state.loading = false
        state.search = action.payload.data;

      })
      .addCase(headerSearch.rejected, (state, action) => {
        state.loading = false
        state.search = {}
      });
  },
})

// export const { setAuth, logoutUser } = commonSlice.actions;

export default commonSlice.reducer