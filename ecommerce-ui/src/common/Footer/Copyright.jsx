import React from "react";

function Copyright() {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full text-xs tracking-tight max-md:max-w-full">
      <p className="font-medium text-gray-500 max-md:max-w-full">
        Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
        reserved. Powered by{" "}
        <span className="font-semibold text-purple-800">BlackRise Themes.</span>
      </p>
      <nav className="flex gap-2 self-start text-gray-900">
        <a href="/" className="hover:underline">
          Terms and Conditions
        </a>
        <a href="/" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/" className="hover:underline">
          Order Tracking
        </a>
      </nav>
    </div>
  );
}

export default Copyright;
