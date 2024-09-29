import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center bg-white py-10 mb-10 max-md:pb-24">
      <div className="flex justify-center items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f2f5167acb70aedb6bd98354cbb6508552de3fd0e764173ea4e9637e9a26e9?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
          className="object-contain mt-24 max-w-full aspect-[2.32] w-[873px] max-md:mt-10"
          alt="404 Not Found Illustration"
        />
      </div>
      <h2 className="mt-4 text-6xl font-bold tracking-tighter leading-tight text-center text-gray-950 max-md:max-w-full max-md:text-4xl">
        That Page Can't Be Found
      </h2>
      <p className="mt-5 text-lg tracking-tight leading-7 text-center text-gray-500 max-md:max-w-full">
        It looks like nothing was found at this location. Maybe try to <br />{" "}
        search for what you are looking for?
      </p>
      <a
        href="/"
        className="px-5 py-4 mt-8 max-w-full text-sm font-bold tracking-tight leading-3 text-center text-white bg-purple-800 rounded-lg w-[150px]"
      >
        Go To Homepage
      </a>
    </section>
  );
};

export default NotFoundPage;
