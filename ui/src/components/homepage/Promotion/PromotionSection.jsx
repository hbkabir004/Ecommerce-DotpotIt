import React from "react";
import PromotionCard from "./PromotionCard";

const promotions = [
  {
    title: "Quality eggs at an",
    subtitle: "affordable price",
    description: "Eat one every day",
    imageSrc:
      "/promotion-section/promotion-1.png",
    buttonText: "Shop Now",
  },
  {
    title: "Snacks that nourishes",
    subtitle: "our mind and body",
    description: "Shine the morning...",
    imageSrc:
      "/promotion-section/promotion-2.png",
    buttonText: "Shop Now",
  },
  {
    title: "Unbeatable quality,",
    subtitle: "unbeatable prices.",
    description: "Only this week. Don't miss...",
    imageSrc:
      "/promotion-section/promotion-3.png",
    buttonText: "Shop Now",
  },
];

function PromotionSection() {
  return (
    <section className="flex gap-5 max-md:flex-col mb-10">
      {promotions.map((promo, index) => (
        <div
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <PromotionCard {...promo} />
        </div>
      ))}
    </section>
  );
}

export default PromotionSection;
