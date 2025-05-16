import React from "react";
interface SectionHeaderProps {
  subHeading?: string;
  title: string;
  desc: string;
}

export const SectionHeader = ({
  subHeading,
  title,
  desc,
}: SectionHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center w-full space-y-3">
      <span className="text-xs">{subHeading}</span>
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
};
