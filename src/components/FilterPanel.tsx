import { FilterPanelProps } from "../types/interfaces";

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter }) => {
  return (
    <div className="mt-4 flex space-x-2">
      {["Робота", "Навчання", "Особисте"].map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className="bg-gray-300 p-2 rounded-md"
        >
          {category}
        </button>
      ))}
      <button
        onClick={() => onFilter(null)}
        className="bg-red-500 text-white p-2 rounded-md"
      >
        Скинути
      </button>
    </div>
  );
};

export default FilterPanel;
