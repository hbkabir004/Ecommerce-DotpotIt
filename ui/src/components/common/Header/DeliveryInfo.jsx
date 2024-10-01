import React from "react";

function DeliveryInfo() {
  return (
    <div className="flex items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6956bc0b92e1d9e584ee49b6e9008d62f4d70e1d122854649d33e27dea3b22a3?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
