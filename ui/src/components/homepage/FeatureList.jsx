import React from "react";

const features = [
  {
    icon: "/icons/feature-icons/feature-icons-1.svg",
    title: "Payment only online",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "/icons/feature-icons/feature-icons-2.svg",
    title: "New stocks and sales",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "/icons/feature-icons/feature-icons-3.svg",
    title: "Quality assurance",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "/icons/feature-icons/feature-icons-4.svg",
    title: "Delivery from 1 hour",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
];

const FeatureList = () => (
  <section className="flex flex-wrap gap-9 mr-4 ml-2.5 tracking-tight max-md:mr-2.5 max-md:max-w-full mb-10 pb-5 border-b-2">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-1 gap-5 items-start">
        <img
          loading="lazy"
          src={feature.icon}
          className="object-contain shrink-0 self-end mt-7 w-14 aspect-[0.98]"
          alt=""
        />
        <div className="flex flex-col self-start">
          <h3 className="self-start text-base font-bold text-gray-950">
            {feature.title}
          </h3>
          <p className="mt-2.5 text-sm leading-5 text-gray-500">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default FeatureList;
