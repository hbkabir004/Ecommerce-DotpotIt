import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="flex gap-1.5 self-start text-xs">
      <span className="grow text-gray-400">Home</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a6830ff71cc7118ed41b75d5597681d34cc07a0c7840b62324e2dd83fc52202?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
        alt=""
        className="object-contain shrink-0 self-start w-3 aspect-square"
      />
      <span className="text-gray-950">My account</span>
    </nav>
  );
};

export default Breadcrumb;
