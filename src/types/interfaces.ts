export interface HeaderProps {
    onSearch: (query: string) => void;
}

export interface Note {
    id: number;
    title: string;
    text: string;
    category: string;
    date: string;
}

export interface NoteFormProps {
    onSave: (note: Note) => void;
    noteToEdit?: Note;
}

export interface NotesListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

export interface NoteCardProps {
    note: Note;
    onDelete: (id: number) => void;
}

export interface FilterPanelProps {
    onFilter: (category: string | null) => void;
}