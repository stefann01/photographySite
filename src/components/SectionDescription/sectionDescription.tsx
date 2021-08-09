import React from "react";

interface SectionDescriptionProps {
  className?: string;
}
export default function SectionDescription({
  className,
}: SectionDescriptionProps) {
  return (
    <p className={className}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  );
}
