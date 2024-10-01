import React from "react";

function HelpSection() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-sm font-semibold tracking-tight leading-tight text-gray-900">
        Do You Need Help ?
      </h3>
      <p className="self-stretch mt-6 text-sm tracking-tight leading-5 text-gray-500">
        Autoseligen syr. Nek diarask fröbomba. Nör <br /> antipol kynoda nynat.
        Pressa fåmoska.
      </p>
      <div className="flex gap-6 mt-9">
        <div className="flex flex-col self-start">
          <img
            loading="lazy"
            src="/icons/footer-icons/call.svg"
            alt=""
            className="object-contain w-7 aspect-square mt-5"
          />
          <img
            loading="lazy"
            src="/icons/footer-icons/form-black.svg"
            alt=""
            className="object-contain mt-12 w-7 aspect-square max-md:mt-10"
          />
        </div>
        <div className="flex flex-col text-xs tracking-tight text-gray-900">
          <p>Monday-Friday: 08am-9pm</p>
          <p className="mt-3 text-xl font-bold tracking-tighter max-md:mr-2">
            0 800 300-353
          </p>
          <p className="mt-11 max-md:mt-10 max-md:mr-0.5">
            Need help with your order?
          </p>
          <p className="self-start mt-2.5 text-sm font-semibold">
            info@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
