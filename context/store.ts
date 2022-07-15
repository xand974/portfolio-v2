import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./slices/modal.slice";
import GridSlice from "./slices/grid.slice";
import AppSlice from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    grid: GridSlice,
    app: AppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
