import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./slices/modal.slice";
import GridSlice from "./slices/grid.slice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    grid: GridSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
