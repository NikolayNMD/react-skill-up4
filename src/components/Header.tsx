interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="w-full bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Менеджер Нотаток</h1>
      <label className="block mb-2 text-lg">
        Фільтрація нотаток:
        <input
          type="text"
          placeholder="Пошук..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-2 rounded-md text-black bg-white"
        />
      </label>
    </header>
  );
};

export default Header;
