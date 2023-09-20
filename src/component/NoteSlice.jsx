import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const { title, text } = action.payload;
      state.push({
        title,
        text,
        timestamp: new Date(),
        id: uuid(),
      });
    },
    deleteNote: (state, action) => {
      const noteId = action.payload;
      return state.filter((note) => note.id !== noteId);
    },
    editNote: (state, action) => {
      const { noteId, updatedNote } = action.payload;
      const noteIndex = state.findIndex((note) => note.id === noteId);
      if (noteIndex !== -1) {
        state[noteIndex] = updatedNote;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = noteSlice.actions;
export default noteSlice.reducer;