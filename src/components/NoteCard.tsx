import { Note } from "./NotesManager";

interface NoteCardProps {
  note: Note;
  onDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold">{note.title}</h3>
      <p>{note.text}</p>
      <span className="text-sm text-gray-500">
        {note.category} • {note.date}
      </span>
      <button
        onClick={() => onDelete(note.id)}
        className="bg-red-500 text-white p-2 mt-2 w-full"
      >
        Видалити
      </button>
    </div>
  );
};

export default NoteCard;
