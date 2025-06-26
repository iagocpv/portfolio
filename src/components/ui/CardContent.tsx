import React, { type ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`p-6 ${className ?? ""}`}>
      {children}
    </div>
  );
};
