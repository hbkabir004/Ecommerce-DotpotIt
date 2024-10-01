import React from "react";

function Button({ text, iconSrc }) {
  return (
    <button className="flex relative gap-1.5 px-3.5 py-2.5 mt-5 mb-0 leading-4 text-center bg-white border border-solid rounded-[999px] text-neutral-800">
      <span className="grow">{text}</span>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 w-5 aspect-[1.43]"
      />
    </button>
  );
}

export default Button;
