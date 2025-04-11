import { useState } from "react";
import Header from "./components/Header";
import NotesManager from "./components/NotesManager";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header onSearch={setSearchQuery} />
      <NotesManager searchQuery={searchQuery} />
    </div>
  );
};

export default App;
