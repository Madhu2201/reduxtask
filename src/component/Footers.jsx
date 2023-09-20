import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNote } from "./NoteSlice";
import { MdModeEditOutline, MdDelete } from "react-icons/md";


const Footers = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editedNote, setEditedNote] = useState(null);

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  const handleEditNote = () => {
    if (editedNote) {
      dispatch(editNote({ noteId: editedNote.id, updatedNote: editedNote }));
      setEditMode(false);
      setEditedNote(null); // Clear editedNote state after saving
    }
  };

  return (
    <div className="footer">
      <div className="flex">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {editMode && editedNote?.id === note.id ? (
              <>
                <input
                  className="input"
                  value={editedNote.title}
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      title: e.target.value,
                    })
                  }
                />
                <textarea
                  className="textarea2"
                  value={editedNote.text}
                  placeholder="Edit Text"
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      text: e.target.value,
                    })
                  }
                />
                <button onClick={handleEditNote}>Save</button>
              </>
            ) : (
              <>
                <h2>{note.title}</h2>
                <p className="textnode">{note.text}</p>
                <div>
                  <input
                    className="input"
                    value={note.timestamp.toLocaleString()}
                    readOnly // Make the timestamp input read-only
                  />
                  {!editMode ? (
                    <>
                      <MdModeEditOutline
                        onClick={() => {
                          setEditMode(true);
                          setEditedNote({ ...note }); // Copy the note for editing
                        }}
                      />
                      <MdDelete onClick={() => handleDeleteNote(note.id)} />
                    </>
                  ) : null}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footers;