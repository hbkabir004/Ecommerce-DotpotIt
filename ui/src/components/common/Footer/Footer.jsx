import React from "react";
import AppDownload from "./AppDownload";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import HelpSection from "./HelpSection";
import NewsletterSignup from "./NewsletterSignup";
import PaymentMethods from "./PaymentMethods";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="flex flex-col items-center px-20 pt-14 bg-gray-100 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1360px] max-md:max-w-full">
        <NewsletterSignup />
        <div className="flex flex-wrap gap-5 justify-between items-start py-14 pr-5 mt-14 border-t border-gray-300 max-md:mt-10 max-md:max-w-full">
          <HelpSection />
          <FooterLinks />
          <div className="flex flex-col gap-5 items-start">
            <AppDownload />
            <SocialMedia />
          </div>
        </div>
        <div className="flex flex-col py-14 w-full border-t border-gray-300 max-md:max-w-full">
          <Copyright />
          <PaymentMethods />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
