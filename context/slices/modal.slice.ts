import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ModalType = {
  open: boolean;
  element: JSX.Element | null;
};

const initialState: ModalType = {
  open: false,
  element: null,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OPEN_MODAL: (state, action: PayloadAction<JSX.Element>) => {
      state.open = true;
      state.element = action.payload;
    },
    CLOSE_MODAL: (state) => {
      state.open = false;
    },
  },
});

export const { OPEN_MODAL, CLOSE_MODAL } = ModalSlice.actions;
export default ModalSlice.reducer;
