import React from "react";

function AppDownload() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-sm font-semibold tracking-tight leading-tight text-gray-900">
        Download our app
      </h3>
      <div className="flex gap-4 self-stretch mt-5 text-xs font-medium tracking-tight leading-4 text-gray-500">
        <img
          loading="lazy"
          src="/icons/footer-icons/appstore.jpg"
          alt="App Store"
          className="object-contain shrink-0 max-w-full aspect-[3.08] w-[120px]"
        />
        <p className="my-auto">
          Download App Get <br /> -10% Discount
        </p>
      </div>
      <div className="flex gap-4 self-stretch mt-2.5 text-xs font-medium tracking-tight leading-4 text-gray-500">
        <img
          loading="lazy"
          src="/icons/footer-icons/googleplay.jpg"
          alt="Google Play"
          className="object-contain shrink-0 max-w-full aspect-[3.08] w-[120px]"
        />
        <p className="my-auto">
          Download App Get <br /> -20% Discount
        </p>
      </div>
    </div>
  );
}

export default AppDownload;
