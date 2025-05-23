import React from "react";

interface ButtonProps {
  label: string;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = "bg-blue-500",
  textColor = "text-white",
  ...rest
}) => {
  return (
    <button
      className={`inline-flex items-center gap-2 px-4 py-2 rounded ${color} ${textColor} hover:opacity-90 transition`}
      {...rest}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
