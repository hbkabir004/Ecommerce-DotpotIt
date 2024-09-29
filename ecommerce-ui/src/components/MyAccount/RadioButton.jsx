import React from "react";

function RadioButton({ label, checked }) {
  return (
    <div className="flex self-start mt-4">
      <div
        className={`flex flex-col justify-center items-center px-1 bg-white border ${checked ? "border-blue-600" : "border-neutral-500"
          } border-solid h-[13px] rounded-[50px] w-[13px]`}
      >
        {checked && (
          <div className="flex shrink-0 h-2 bg-blue-600 rounded-[50px] w-[7px]" />
        )}
      </div>
      <label className="text-sm tracking-tight text-gray-950 ml-2">
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
