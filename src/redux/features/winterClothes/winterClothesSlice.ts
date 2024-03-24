import { createSlice } from "@reduxjs/toolkit";

type TWinterClothes = {
  _id: string;
  title: string;
  category: string;
  size: string;
  description: string;
};
type TInitialState = {
  winterClothes: TWinterClothes[];
};
const initialState: TInitialState = {
  winterClothes: [],
};

export const winterClothesSlice = createSlice({
  name: "winter",
  initialState: initialState,
  reducers: {
    setWinterClothes: (state, action) => {
      state.winterClothes.push(action.payload);
    },
    removeWinterCloth: (state, action) => {
      // const { id } = action.payload;
      state.winterClothes = state.winterClothes?.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});
export const { setWinterClothes, removeWinterCloth } =
  winterClothesSlice.actions;
export default winterClothesSlice.reducer;
