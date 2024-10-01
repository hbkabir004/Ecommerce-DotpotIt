import React from 'react';

const PromotionBanner = () => (
  <section className="relative flex md:flex-row flex-col md:justify-evenly overflow-hidden py-0 mt-7 bg-orange-50 rounded-md border border-orange-100 border-solid max-md:px-5 z-20 mb-10">
    <div className="flex flex-col my-auto mr-0 max-md:max-w-full">
      <h2 className="text-2xl font-bold tracking-tight text-orange-600 max-md:mr-1 max-md:max-w-full">
        In store or online your health & safety is our top priority
      </h2>
      <p className="mt-1 text-sm tracking-tight text-gray-500 max-md:max-w-full">
        The only supermarket that makes your life easier, makes you enjoy life and makes it better
      </p>
    </div>

    <div className="absolute bottom-1 z-0">
      <span className="bg-gradient-to-t from-[#ea580c66] to-[#ea580c00] bg-clip-text text-transparent font-sans text-8xl font-bold leading-tight tracking-tighter">
        %50
      </span>
    </div>

    <div>
      <img className="object-contain aspect-[6.76] w-[573px] max-md:max-w-full pt-3 md:pt-0" loading="lazy" src="/promotion-section/promo-banner.png" alt="Promotion visual" />
    </div>
  </section>
);

export default PromotionBanner;