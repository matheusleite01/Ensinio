import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  language: string;
};

const initialState: initialStateProps = {
  language: "pt",
};

const slice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = slice.actions;

export default slice.reducer;
