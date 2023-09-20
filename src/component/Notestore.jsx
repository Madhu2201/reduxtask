import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./NoteSlice";

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

export default store;