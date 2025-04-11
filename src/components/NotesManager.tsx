import { useState } from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import FilterPanel from "./FilterPanel";
import { Note } from "../types/interfaces";

const NotesManager: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const addOrEditNote = (newNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.some((note) => note.id === newNote.id)
        ? prevNotes.map((note) => (note.id === newNote.id ? newNote : note))
        : [...prevNotes, newNote]
    );
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      (categoryFilter ? note.category === categoryFilter : true) &&
      (searchQuery
        ? note.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
  );

  return (
    <div className="w-3/4 mt-6">
      <NoteForm onSave={addOrEditNote} />
      <FilterPanel onFilter={setCategoryFilter} />
      <NotesList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
};

export default NotesManager;
