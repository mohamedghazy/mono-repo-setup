// libs/ui-library/src/lib/Button.tsx
import React from 'react';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      {label}
    </button>
  );
};
