import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string; 
  textColor?: string; 
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'bg-blue-500',
  textColor = 'text-white',
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded ${color} ${textColor} hover:opacity-90 transition`}
       {...rest}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
