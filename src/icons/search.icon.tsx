import React from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={`w-4 h-4 text-gray-500 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
      />
    </svg>
  );
};

export default SearchIcon;
