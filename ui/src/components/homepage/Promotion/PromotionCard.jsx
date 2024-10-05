import React from "react";

function PromotionCard({ title, subtitle, description, imageSrc, buttonText }) {
  return (
    <article className="flex overflow-hidden relative flex-col items-start py-9 pr-20 pl-5 w-full text-xs font-bold tracking-tight min-h-[220px] max-md:pr-5 max-md:mt-8 max-md:max-w-full rounded-lg">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <header className="relative font-medium text-orange-600">
        Only This Week
      </header>
      <h2 className="relative mt-4 text-2xl tracking-tighter text-gray-900">
        {title}
      </h2>
      <h3 className="relative mt-1 text-2xl tracking-tighter text-gray-900">
        {subtitle}
      </h3>
      <p className="relative mt-3.5 text-sm tracking-tight leading-normal text-gray-500">
        {description}
      </p>
      <button className="flex relative gap-1.5 px-3.5 py-2.5 mt-5 leading-4 text-center bg-white border border-solid rounded-[999px] text-neutral-800">
        <span className="grow">{buttonText}</span>
        <img
          loading="lazy"
          src="/icons/checkout-icons/right-arrow.svg"
          alt=""
          className="object-contain shrink-0 w-5 aspect-[1.43]"
        />
      </button>
    </article>
  );
}

export default PromotionCard;
