import React from "react";

const footerSections = [
  {
    title: "Make Money with Us",
    links: [
      "Sell on Grogin",
      "Sell Your Services on Grogin",
      "Sell on Grogin Business",
      "Sell Your Apps on Grogin",
      "Become an Affilate",
      "Advertise Your Products",
      "Sell-Publish with Us",
      "Become an Blowwe Vendor",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Accessibility Statement",
      "Your Orders",
      "Returns & Replacements",
      "Shipping Rates & Policies",
      "Refund and Returns Policy",
      "Privacy Policy",
      "Terms and Conditions",
      "Cookie Settings",
      "Help Center",
    ],
  },
  {
    title: "Get to Know Us",
    links: [
      "Careers for Grogin",
      "About Grogin",
      "Inverstor Relations",
      "Grogin Devices",
      "Customer reviews",
      "Social Responsibility",
      "Store Locations",
    ],
  },
];

function FooterLinks() {
  return (
    <>
      {footerSections.map((section, index) => (
        <nav
          key={index}
          className="flex flex-col items-start text-sm tracking-tight text-gray-600"
        >
          <h3 className="text-sm font-semibold tracking-tight leading-tight text-gray-900">
            {section.title}
          </h3>
          <ul className="mt-4">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className={linkIndex > 0 ? "mt-3" : ""}>
                <a href="/" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </>
  );
}

export default FooterLinks;
