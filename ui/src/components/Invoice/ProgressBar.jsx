import React from "react";

function ProgressBar() {
  return (
    <div className="flex overflow-hidden flex-col mt-4 bg-red-100 max-md:max-w-full">
      <div className="flex shrink-0 rounded-xl bg-black bg-opacity-10 h-[5px] max-md:max-w-full" />
    </div>
  );
}

export default ProgressBar;
