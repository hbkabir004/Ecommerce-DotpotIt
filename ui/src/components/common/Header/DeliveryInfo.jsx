import React from "react";

function DeliveryInfo() {
  return (
    <div className="flex items-center">
      <img
        loading="lazy"
        src="/icons/location.svg"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square"
      />
      <div className="flex flex-col self-stretch my-auto tracking-tight leading-tight text-gray-950">

        <span className="text-xs">Deliver to all</span>
        {/* <div className="self-start mt-1.5 text-sm font-medium">all</div> */}
      </div>
    </div>
  );
}

export default DeliveryInfo;
