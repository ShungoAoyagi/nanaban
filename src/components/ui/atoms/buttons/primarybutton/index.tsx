import React from "react";

export type PrimaryButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent) => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button className="rounded-full bg-rose-600 px-4 py-2" onClick={onClick}>
      <p className="text-white">{label}</p>
    </button>
  );
};
