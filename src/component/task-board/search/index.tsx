import React from 'react';
import SearchIcon from '../../../icons/search.icon'; // adjust path as needed
import Input from '../../common/Input';

interface SearchInputProps {
  value?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch, placeholder = 'Search...' }) => {
  
  return (
    <div className="relative w-full max-w-sm">
      <Input
        name="search"
        type="text"
        value={value}
        onChange={onSearch}
        placeholder="Search..."
        className="w-full border border-gray-300 rounded px-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchInput;
