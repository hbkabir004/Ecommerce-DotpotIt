import React from "react";

const Notification = () => {
  return (
    <header className="flex flex-col justify-center items-center self-stretch px-16 py-3.5 w-full tracking-tight text-white bg-purple-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 max-w-full w-[969px]">
        <p className="text-xs font-semibold text-center">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>
        <div className="flex flex-1 gap-4 self-start">
          <p className="grow my-auto text-xs font-medium">
            Until the end of the sale:
          </p>
          <div className="flex gap-1.5 text-lg font-bold whitespace-nowrap">
            <div className="grow">47</div>
            <span className="text-xs">days</span>
            <div>06</div>
            <span className="my-auto text-xs">hours</span>
            <div>58</div>
            <span className="my-auto text-xs">minutes</span>
            <div>10</div>
            <span className="my-auto text-xs">sec.</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Notification;
