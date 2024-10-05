import React from "react";

function BillingDetails() {
  return (
    <form className="w-full">
      <div className="flex flex-wrap gap-5 justify-between mt-3 max-w-full text-gray-950 w-[554px]">
        <div className="flex flex-col">
          <h2 className="text-base font-bold tracking-tight leading-tight">
            Billing details
          </h2>
          <label
            htmlFor="firstName"
            className="self-start mt-3.5 text-sm tracking-tight"
          >
            First name <span className="underline">*</span>
          </label>
        </div>
        <label
          htmlFor="lastName"
          className="self-end mt-7 text-sm tracking-tight"
        >
          Last name <span className="underline">*</span>
        </label>
      </div>
      <div className="flex flex-wrap gap-5 self-stretch mt-2">
        <input
          id="firstName"
          type="text"
          className="flex shrink-0 max-w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)] w-[465px]"
          required
        />
        <input
          id="lastName"
          type="text"
          className="flex shrink-0 max-w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)] w-[465px]"
          required
        />
      </div>

      <label
        htmlFor="companyName"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        Company name (optional)
      </label>
      <input
        id="companyName"
        type="text"
        className="flex shrink-0 self-stretch mt-2 w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
      />

      <label
        htmlFor="country"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        Country / Region <span className="underline">*</span>
      </label>
      <select
        id="country"
        className="flex flex-wrap gap-5 justify-between self-stretch px-4 py-4 mt-1.5 text-sm font-medium tracking-tight leading-loose bg-white rounded-lg border border-gray-300 border-solid text-neutral-700 max-md:max-w-full"
        required
      >
        <option>United States (US)</option>
      </select>

      <label
        htmlFor="streetAddress"
        className="mt-4 text-sm tracking-tight text-gray-950 block"
      >
        Street address <span className="underline">*</span>
      </label>
      <input
        id="streetAddress"
        type="text"
        placeholder="House number and street name"
        className="self-stretch px-3.5 py-4 mt-2 text-sm tracking-tight text-gray-400 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:pr-5 max-md:max-w-full w-full"
        required
      />
      <input
        id="apartment"
        type="text"
        placeholder="Apartment, suite, unit, etc. (optional)"
        className="self-stretch px-3.5 py-4 mt-4 text-sm tracking-tight text-gray-400 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:pr-5 max-md:max-w-full w-full"
      />

      <label
        htmlFor="city"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        Town / City <span className="underline">*</span>
      </label>
      <input
        id="city"
        type="text"
        className="flex shrink-0 self-stretch mt-2 w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
        required
      />

      <label
        htmlFor="state"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        State <span className="underline">*</span>
      </label>
      <select
        id="state"
        className="flex flex-wrap gap-5 justify-between self-stretch px-4 py-4 mt-1.5 text-sm font-medium tracking-tight leading-loose whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid text-neutral-700 max-md:max-w-full"
        required
      >
        <option>California</option>
      </select>

      <label
        htmlFor="zipCode"
        className="mt-4 text-sm tracking-tight text-gray-950 block"
      >
        ZIP Code <span className="underline">*</span>
      </label>
      <input
        id="zipCode"
        type="text"
        className="flex shrink-0 self-stretch mt-2 w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
        required
      />

      <label
        htmlFor="phone"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        Phone <span className="underline">*</span>
      </label>
      <input
        id="phone"
        type="tel"
        className="flex shrink-0 self-stretch mt-2 w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
        required
      />

      <label
        htmlFor="email"
        className="mt-5 text-sm tracking-tight text-gray-950 block"
      >
        Email address <span className="underline">*</span>
      </label>
      <input
        id="email"
        type="email"
        className="flex shrink-0 self-stretch mt-2 w-full h-11 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
        required
      />

      <div className="flex gap-2 mt-4 text-sm tracking-tight text-gray-950">
        <input
          type="checkbox"
          id="createAccount"
          className="flex shrink-0 self-start bg-white rounded border border-solid border-neutral-500 h-[13px] w-[13px]"
        />
        <label htmlFor="createAccount" className="basis-auto">
          Create an account?
        </label>
      </div>

      <div className="flex gap-2 mt-5 text-sm font-bold tracking-tight leading-tight text-gray-950">
        <input
          type="checkbox"
          id="shipDifferent"
          className="flex shrink-0 self-start bg-white rounded border border-solid border-neutral-500 h-[13px] w-[13px]"
        />
        <label htmlFor="shipDifferent" className="basis-auto">
          Ship to a different address?
        </label>
      </div>

      <label
        htmlFor="orderNotes"
        className="mt-9 text-sm tracking-tight text-gray-950 block"
      >
        Order notes (optional)
      </label>
      <textarea
        id="orderNotes"
        className="overflow-hidden self-stretch px-3.5 pt-5 pb-14 mt-2 text-sm tracking-tight leading-3 text-gray-400 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:pr-5 max-md:max-w-full w-full"
        placeholder="Notes about your order, e.g. special notes for delivery."
      ></textarea>
    </form>
  );
}

export default BillingDetails;
