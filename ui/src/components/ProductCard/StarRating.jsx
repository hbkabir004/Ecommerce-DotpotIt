import React from "react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-2 self-start mt-3 text-xs tracking-tight text-gray-500 whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/197be03b73f8f1dff1c3798a3fa52e672d44285b1aac3afe10fbd3da621ecbda?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
        alt={`${rating} star rating`}
        className="object-contain shrink-0 w-full aspect-[6.1]"
      />
      <div>{rating}</div>
    </div>
  );
}

export default StarRating;
