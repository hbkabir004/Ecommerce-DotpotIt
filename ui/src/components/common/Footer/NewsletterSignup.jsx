import React from "react";

function NewsletterSignup() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 max-md:mr-1.5">
          Join our newsletter for £10 offs
        </h2>
        <p className="mt-4 text-sm tracking-tight leading-5 text-gray-500">
          Register now to get latest updates on promotions &<br /> coupons.
          Don't worry, we not spam!
        </p>
      </div>
      <div className="flex flex-col">
        <form className="flex gap-5 justify-between items-start pl-4 max-w-full text-sm tracking-tight bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]">
          <div className="flex gap-1.5 my-auto text-gray-400">
            <img
              loading="lazy"
              src="/icons/footer-icons/form.svg"
              alt="form-svg"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <label htmlFor="emailInput" className="sr-only">
              Enter your email address
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email address"
              className="my-auto basis-auto bg-transparent border-none focus:outline-none"
              aria-label="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="z-10 self-start px-5 py-5 font-bold leading-3 text-center text-white whitespace-nowrap bg-purple-800 rounded-none"
          >
            SEND
          </button>
        </form>
        <p className="mt-4 text-xs tracking-tight text-gray-500 max-md:mr-2.5">
          By subscribing you agree to our{" "}
          <span className="font-medium text-purple-800">
            Terms & Conditions and Privacy & Cookies Policy.
          </span>
        </p>
      </div>
    </div>
  );
}

export default NewsletterSignup;
