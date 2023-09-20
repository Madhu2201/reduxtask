
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./NoteSlice";
import Footers from "./Footers";


const Header = () => {
  const dispatch = useDispatch();
  const [newNote, setNewNote] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() !== "" && newTitle.trim() !== "") {
      dispatch(addNote({ title: newTitle, text: newNote }));
      setNewNote("");
      setNewTitle("");
    }
  };

  return (
    <div className='header_note'>
      <div>
        <h1>Add a Note</h1>
      </div>
      <div>
        <div>
          <input
            className='textarea1'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder='Title'
          />
        </div>
        <textarea
          className='textarea'
          placeholder="Take a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className='addnote' onClick={handleAddNote}>
          +
        </button>
      </div>
      <div>
        <h2>My Notes</h2>
        <Footers newNote={newNote} newTitle={newTitle} />
      </div>
    </div>
  );
};

export default Header;