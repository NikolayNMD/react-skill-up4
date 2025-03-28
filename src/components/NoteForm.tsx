import { useState } from "react";
import { Note } from "./NotesManager";

interface NoteFormProps {
  onSave: (note: Note) => void;
  noteToEdit?: Note;
}

const categories = ["Робота", "Навчання", "Особисте"];

const NoteForm: React.FC<NoteFormProps> = ({ onSave, noteToEdit }) => {
  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [text, setText] = useState(noteToEdit?.text || "");
  const [category, setCategory] = useState(
    noteToEdit?.category || categories[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: noteToEdit?.id || Date.now(),
      title,
      text,
      category,
      date: new Date().toLocaleDateString(),
    });
    setTitle("");
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Назва"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        className="border p-2 w-full mb-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button className="bg-blue-500 text-white p-2 rounded-md w-full">
        {noteToEdit ? "Зберегти" : "Додати"}
      </button>
    </form>
  );
};

export default NoteForm;
