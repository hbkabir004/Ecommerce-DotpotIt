
const CategoryNav = () => (
  <nav className="flex flex-col items-center px-20 bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col max-w-full w-[1361px]">
      <div className="flex z-10 flex-wrap gap-5 justify-between w-full tracking-tight max-md:max-w-full">
        <div className="flex flex-wrap gap-7 text-base font-semibold leading-3 text-gray-950">
          <div className="flex flex-col bg-white rounded-lg">
            <button className="flex z-10 gap-3.5 px-5 py-4 rounded-lg border border-t border-r border-l">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58257ba7021a55117883dea24848416e5a85a0d5f48abd7ad8e5d62c57352cf4?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
                className="object-contain shrink-0 aspect-[1.22] w-[22px]"
                alt=""
              />
              <span className="grow shrink self-start w-[225px]">
                All Categories
              </span>
            </button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02faea6c017b1504331b25c4a25712e12d6b1bda78afe0b01f77c0f248568d72?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b7a5ac3c1cbdf8bcb4a1077891019695c8e41ee0ff22870b4b00cbbee7141?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ba23c7bf05921254e026dbea8ff9087804850ea3b9185c1912eeb25ed200be?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f153f27fb2fdc5617357987f4c15d5abcb4ebc901df4e7ab176bc4698c356908?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
              className="object-contain shrink-0 w-2.5 aspect-[0.21]"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 items-center">
            <span className="grow self-stretch my-auto text-base font-semibold leading-3 text-red-600">
              Almost Finished
            </span>
            <span className="self-stretch px-2 py-1.5 my-auto text-xs font-bold leading-none text-center text-white whitespace-nowrap rounded">
              SALE
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61d19d59ead7a9eedd46b42023bcbd06b762891b71bcf67bb8ef476eef75e3c?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
