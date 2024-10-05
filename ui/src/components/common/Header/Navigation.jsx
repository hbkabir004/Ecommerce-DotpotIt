import React from "react";

const Navigation = () => {
  return (
    <nav className="flex flex-col justify-center items-center px-16 py-px w-full tracking-tight bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1360px] max-md:max-w-full">
        <div className="flex flex-wrap gap-6 text-base font-semibold leading-3 text-gray-950">

          <button className="flex justify-around items-center z-10 px-2 my-2 rounded-lg border border-t border-r border-l">
            <img
              loading="lazy"
              src="/icons/category-icon.svg"
              className="object-contain"
              alt=""
            />
            <span className="ml-2 mr-10">
              All Categories
            </span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon.svg"
              className="object-contain"
              alt=""
            />
          </button>

          <div className="flex gap-2 whitespace-nowrap">
            <a href="/" className="my-auto">
              Home
            </a>
            <img
              loading="lazy"
              src="/icons/dropdown-icon.svg"
              className="object-contain shrink-0 w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 whitespace-nowrap">
            <a href="/shop" className="my-auto">
              Shop
            </a>
            <img
              loading="lazy"
              src="/icons/dropdown-icon.svg"
              className="object-contain shrink-0 aspect-[0.19] w-[9px]"
              alt=""
            />
          </div>
          <div className="flex gap-7 my-auto">
            <a href="/fruits-vegetables" className="grow">
              Fruits & Vegetables
            </a>
            <a href="/beverages">Beverages</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-3 text-base font-semibold leading-3 text-gray-950">
            <span className="grow my-auto">Trending Products</span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon.svg"
              className="object-contain shrink-0 w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 items-center">
            <span className="grow self-stretch my-auto text-base font-semibold leading-3 text-red-600">
              Almost Finished
            </span>
            <span className="self-stretch px-2 py-1.5 my-auto text-xs font-bold leading-none text-center bg-orange-600 text-white whitespace-nowrap rounded">
              SALE
            </span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon.svg"
              className="object-contain shrink-0 self-stretch w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
