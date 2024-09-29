import React from "react";

function Breadcrumb() {
  return (
    <div className="flex gap-1.5 self-start text-xs tracking-tight">
      <div className="grow text-gray-400">Home</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/77de77ad369485ebfb27e5aeeb0e49cca4e0b9dd8d74a1d1d12b696970fd3f8b?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
        className="object-contain shrink-0 self-start w-3 aspect-square"
        alt=""
      />
      <div className="text-gray-950">My account</div>
    </div>
  );
}

export default Breadcrumb;
