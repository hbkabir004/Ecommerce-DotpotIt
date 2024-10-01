import React from "react";

function ProductCard() {
  return (
    <article className="flex overflow-hidden flex-col text-xs font-bold tracking-tight rounded-md max-w-[318px]">
      <div className="flex overflow-hidden relative flex-col items-start pt-6 pr-16 pb-56 pl-5 w-full aspect-[0.801]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/098fd18e45eaaa3c1f6b7e103a10564f10cc3cdae2d17ae87a8d1bf50f4f9059?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <p className="relative font-medium text-orange-600">Only This Week</p>
        <h2 className="relative mt-3.5 text-xl tracking-tighter text-gray-900">
          Provides you experienced quality products
        </h2>
        <p className="relative mt-3.5 text-sm tracking-tight leading-normal text-gray-500">
          Feed your family the best
        </p>
        <button className="flex relative gap-1.5 px-3.5 py-2.5 mt-5 mb-0 leading-4 text-center bg-white border border-solid rounded-[999px] text-neutral-800">
          <span className="grow">{text}</span>
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 w-5 aspect-[1.43]"
          />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
