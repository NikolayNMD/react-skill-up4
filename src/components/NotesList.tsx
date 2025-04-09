import { NotesListProps } from "../types/interfaces";
import NoteCard from "./NoteCard";



const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;
