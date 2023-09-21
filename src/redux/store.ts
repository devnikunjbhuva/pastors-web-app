// store.ts
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
