import React from "react";

const HeroBanner = () => (
  <section className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      src="/hero-banner.jpg"
      className="object-contain grow mt-6 w-full aspect-[2.14] max-md:mt-10 max-md:max-w-full"
      alt="Hero banner"
    />
  </section>
);

export default HeroBanner;
