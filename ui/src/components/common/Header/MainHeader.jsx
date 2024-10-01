import React from "react";
import { Link } from "react-router-dom";
import DeliveryInfo from "./DeliveryInfo";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";

function MainHeader() {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-4 bg-white border border-solid max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1363px] max-md:max-w-full">
        <Link to="/">
          <div className="flex gap-2.5 text-2xl font-bold text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f70a5f3e02f4592d2d3b72e9fed17a6f9b4095cf9c51873905254ade148a3a5?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
              alt="JinStore Logo"
              className="object-contain shrink-0 rounded-none aspect-[1.15] w-[45px]"
            />
            <div>JinStore</div>
          </div>
        </Link>
        <div className="flex gap-3.5 items-center self-stretch">
          <DeliveryInfo />
          <SearchBar />
        </div>
        <div className="flex gap-3.5 mt-1.5 tracking-tight leading-tight text-gray-950">
          <UserAccount />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bed7c6d-e66c-4ffa-ab12-878f2d9fbe3f?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
            alt="Notifications"
          />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3fd8ec0-fd87-47c5-b250-b7e3023fb9c6?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
            alt="Cart"
          />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
