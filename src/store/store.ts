import { configureStore } from "@reduxjs/toolkit";
import { sneakerAllApi } from "../api/sneakerAllApi";

export const store = configureStore({
  reducer: {
    [sneakerAllApi.reducerPath]: sneakerAllApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sneakerAllApi.middleware),
});

export default store;
