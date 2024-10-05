import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-wrap gap-10 self-stretch py-2.5 pr-2.5 pl-5 text-sm tracking-tight text-gray-500 bg-gray-100 rounded-lg max-md:max-w-full">
      <input
        type="text"
        placeholder="Search for products, categories or brands..."
        className="bg-transparent border-none outline-none flex-grow"
        aria-label="Search for products, categories or brands"
      />
      <button aria-label="Search">
        <img
          loading="lazy"
          src="icons/search-icon.svg"
          alt=""
          className="object-contain shrink-0 aspect-square w-[26px]"
        />
      </button>
    </div>
  );
}

export default SearchBar;
