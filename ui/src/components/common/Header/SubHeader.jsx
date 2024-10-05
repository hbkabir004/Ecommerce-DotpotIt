import React from "react";

const TopBar = () => {
  const links = [
    { text: "About Us", url: "#" },
    { text: "My account", url: "#" },
    { text: "Wishlist", url: "#" },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-16 py-3.5 text-xs font-medium tracking-tight text-gray-500 bg-white border border-b max-md:px-5">
      <div className="flex flex-wrap gap-5 md:justify-between justify-center w-full max-w-[1359px] max-md:max-w-full">
        <nav className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex flex-row justify-evenly md:gap-3 gap-0">
            {links.map((link, index) => (
              <a key={index} href={link.url} className="my-auto">
                {link.text}
              </a>
            ))}
          </div>
          <div className="px-4 py-0.5 border border-l">
            We deliver to you every day from{" "}
            <span className="font-bold text-orange-600">7:00 to 23:00</span>
          </div>
        </nav>
        <div className="flex gap-2 my-auto">
          <div className="flex items-center">
            <span className="grow">English</span>
            <img
              src="/icons/dropdown-icon.svg"
              alt=""
              className="object-contain shrink-0 self-start w-2 aspect-[0.8] ml-1"
            />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <img
              src="/icons/dropdown-icon.svg"
              alt=""
              className="object-contain shrink-0 self-start w-2 aspect-[0.8] ml-1"
            />
          </div>
          <a href="#" className="order-tracking">
            Order Tracking
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
