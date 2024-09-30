import React from "react";

function IconButton({ src, alt }) {
  return (
    <button aria-label={alt}>
      <img
        loading="lazy"
        src={src}
        alt=""
        className="object-contain shrink-0 w-8 aspect-[1.07]"
      />
    </button>
  );
}

export default IconButton;
