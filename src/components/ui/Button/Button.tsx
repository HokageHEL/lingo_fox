import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      className="
    bg-brand-primary w-fit shadow-pixel shadow-brand-tertiary rounded-none text-white cursor-pointer inline-block transition-shadow
     hover:shadow-pixelLg hover:bg-brand-secondary hover:shadow-brand-primary"
    >
      {children}
    </button>
  );
};
