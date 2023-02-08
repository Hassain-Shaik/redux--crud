import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contatcs/contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
