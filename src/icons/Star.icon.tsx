// components/icons/StarIcon.tsx
import React from "react";

interface StarIconProps {
  filled?: boolean;
  onClick?: () => void;
}

const StarIcon: React.FC<StarIconProps> = ({ filled = false, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#FACC15" : "none"}
      stroke="#FACC15"
      strokeWidth={1.5}
      className="w-5 h-5 cursor-pointer hover:scale-110 transition"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5l2.317 6.43h6.18l-5 3.636 2.316 6.432L11.48 16.36 6.71 20l2.316-6.432-5-3.636h6.18L11.48 3.5z"
      />
    </svg>
  );
};

export default StarIcon;
