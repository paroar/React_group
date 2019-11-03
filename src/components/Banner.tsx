import React from "react";

const Banner = ({
  children,
  title,
  subtitle
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="banner" data-testid="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
