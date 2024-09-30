import React from 'react';

const PromotionBanner = () => (
  <section className="flex overflow-hidden px-8 mx-2.5 mt-7 bg-orange-50 rounded-md border border-orange-100 border-solid max-md:px-5">
    <div className="flex flex-col my-auto mr-0 max-md:max-w-full">
      <h2 className="text-2xl font-bold tracking-tight text-orange-600 max-md:mr-1 max-md:max-w-full">
        In store or online your health & safety is our top priority
      </h2>
      <p className="mt-1 text-sm tracking-tight text-gray-500 max-md:max-w-full">
        The only supermarket that makes your life easier, makes you enjoy life and makes it better
      </p>
    </div>
    <div className="grow shrink mr-0 text-9xl font-bold tracking-tighter leading-tight w-[202px] max-md:text-4xl">
      %50
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c215bc532562ae1abdaeebc55f497d309e43dbfe85fb62c8617809f6fd3d099?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0" className="object-contain aspect-[6.76] w-[573px] max-md:max-w-full" alt="Promotion visual" />
  </section>
);

export default PromotionBanner;