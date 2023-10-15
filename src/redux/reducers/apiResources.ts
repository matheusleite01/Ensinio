import { DataReourcesModal } from "@/components/ApiResources/hooks/useApiResources";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type InitialStateProps = {
  loading: Boolean;
  data: DataReourcesModal[];
  error: Boolean;
};

const initialState: InitialStateProps = {
  loading: false,
  data: [],
  error: false,
};

export const featchResources = createAsyncThunk("data/resources", async ():Promise<DataReourcesModal[]> => {
    const response = await axios.get("https://json-teste-one.vercel.app/items");
    return response.data;
});


const slice = createSlice({
  name: "ApiResources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchResources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(featchResources.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(featchResources.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});


export default slice.reducer;

