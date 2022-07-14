import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type GridType = {
  lightOn: boolean;
};

const initialState: GridType = {
  lightOn: false,
};

export const GridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    SET_LIGHT: (state, action: PayloadAction<boolean>) => {
      state.lightOn = action.payload;
    },
  },
});

export const { SET_LIGHT } = GridSlice.actions;
export default GridSlice.reducer;
