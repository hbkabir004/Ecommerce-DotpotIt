import React from "react";

function SocialMedia() {
  const socialIcons = [
    {
      src: "/icons/facebook.svg",
      alt: "Facebook",
    },
    {
      src: "/icons/twitter.svg",
      alt: "Twitter",
    },
    {
      src: "/icons/instagram.svg",
      alt: "Instagram",
    },
    {
      src: "/icons/linkedIn.svg",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="mt-14 max-md:mt-10">
      <h4 className="text-xs tracking-tight text-gray-900">
        Follow us on social media:
      </h4>
      <div className="flex gap-1 mt-3.5">
        {socialIcons.map((icon, index) => (
          <a key={index} href="#" aria-label={`Follow us on ${icon.alt}`}>
            <img
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain shrink-0 w-9 rounded-md aspect-square"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
