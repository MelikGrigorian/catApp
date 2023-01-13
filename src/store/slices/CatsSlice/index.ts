import { createSlice } from "@reduxjs/toolkit";
import { IBreeds, ICatsData } from "./types";

export interface CatState {
  breeds: IBreeds[];
  catsData: ICatsData[];
}

const initialState: CatState = {
  breeds: [],
  catsData: [],
};

export const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setBreeds: (state, action) => {
      state.breeds = action.payload;
    },
    setCardInfo: (state, action) => {
      state.catsData = action.payload;
    },
  },
});

export const { setBreeds, setCardInfo } = catSlice.actions;

export default catSlice.reducer;
