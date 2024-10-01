import React from "react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-2 self-start mt-3.5 text-xs tracking-tight text-gray-500 whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa9c1e7c7365d1b3f984802214258db8dacb4bc44f6a74ea611726e489026ab?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
        alt=""
        className="object-contain shrink-0 w-full aspect-[6.1]"
      />
      <span>{rating}</span>
    </div>
  );
}

export default StarRating;
