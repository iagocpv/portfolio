import React, { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg shadow-md bg-white dark:bg-gray-800 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
