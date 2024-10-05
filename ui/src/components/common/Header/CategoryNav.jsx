
const CategoryNav = () => (
  <nav className="flex flex-col items-center px-20 bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col max-w-full w-[1361px]">
      <div className="flex z-10 flex-wrap gap-5 justify-between w-full tracking-tight max-md:max-w-full">
        <div className="flex flex-wrap gap-7 text-base font-semibold leading-3 text-gray-950">
          <div className="flex flex-col bg-white rounded-lg">
            <button className="flex z-10 gap-3.5 px-5 py-4 rounded-lg border border-t border-r border-l">
              <img
                loading="lazy"
                src="/icons/category-icon"
                className="object-contain shrink-0 aspect-[1.22] w-[22px]"
                alt=""
              />
              <span className="grow shrink self-start w-[225px]">
                All Categories
              </span>
            </button>
            <img
              loading="lazy"
              src="/icons/dropdown-icon"
              className="object-contain self-end mt-0 w-2.5 aspect-[0.21] max-md:mr-2.5"
              alt=""
            />
          </div>
          <a
            href="#home"
            className="flex flex-col self-start py-px text-purple-800 whitespace-nowrap"
          >
            <div className="flex z-10 gap-2">
              <span className="my-auto">Home</span>
              <img
                loading="lazy"
                src="/icons/dropdown-icon"
                className="object-contain shrink-0 w-2.5 aspect-[0.21]"
                alt=""
              />
            </div>
            <div className="flex shrink-0 h-px bg-purple-800" />
          </a>
          <a href="#shop" className="flex gap-2.5 self-start whitespace-nowrap">
            <span className="my-auto">Shop</span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon"
              className="object-contain shrink-0 aspect-[0.19] w-[9px]"
              alt=""
            />
          </a>
          <div className="flex gap-7 my-auto">
            <a href="#fruits">Fruits & Vegetables</a>
            <a href="#beverages">Beverages</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex gap-6 self-start">
          <div className="flex gap-3 text-base font-semibold leading-3 text-gray-950">
            <span className="grow my-auto">Trending Products</span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon"
              className="object-contain shrink-0 w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 items-center">
            <span className="grow self-stretch my-auto text-base font-semibold leading-3 text-red-600">
              Almost Finished
            </span>
            <span className="self-stretch px-2 py-1.5 my-auto text-xs font-bold leading-none text-center bg-orange-500 text-white whitespace-nowrap rounded">
              SALE
            </span>
            <img
              loading="lazy"
              src="/icons/dropdown-icon"
              className="object-contain shrink-0 self-stretch w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default CategoryNav;
