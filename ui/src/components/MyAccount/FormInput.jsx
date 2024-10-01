import React from "react";

function FormInput({ label, id, type = "text" }) {
  return (
    <>
      <label
        htmlFor={id}
        className="self-start mt-4 text-sm tracking-tight text-gray-950"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="flex shrink-0 mt-2.5 bg-white rounded-lg border border-gray-300 border-solid h-[42px] shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:max-w-full"
      />
    </>
  );
}

export default FormInput;
