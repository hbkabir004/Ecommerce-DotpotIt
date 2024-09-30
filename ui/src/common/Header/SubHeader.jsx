import React from "react";

const TopBar = () => {
  const links = [
    { text: "About Us", url: "#" },
    { text: "My account", url: "#" },
    { text: "Wishlist", url: "#" },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-16 py-3.5 text-xs font-medium tracking-tight text-gray-500 bg-white border border-b max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1359px] max-md:max-w-full">
        <nav className="flex gap-4">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="my-auto">
              {link.text}
            </a>
          ))}
          <div className="px-4 py-0.5 border border-l">
            We deliver to you every day from{" "}
            <span className="font-bold text-orange-600">7:00 to 23:00</span>
          </div>
        </nav>
        <div className="flex gap-2 my-auto">
          <div className="flex items-center">
            <span className="grow">English</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f233513f65a82e367494f7e798037ca9698e9eacb1abd3faefe6ac0b933132?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
              alt=""
              className="object-contain shrink-0 self-start w-2 aspect-[0.8]"
            />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/15f1c3a6fdadea90058eeb9a06208191544e1a2dab1a02417f90e987cc5e10b8?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
              alt=""
              className="object-contain shrink-0 self-start w-2 aspect-[0.8]"
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
