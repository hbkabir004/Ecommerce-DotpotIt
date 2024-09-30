import React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73fd640b602a571c135b25ef4dc87e63b4266134926926ea7218662c6dfc1a82?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    title: "Payment only online",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e395bc8a14c17f2e9752df2817029075306a2e48735eaf966ad2249a7ca5dba?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    title: "New stocks and sales",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec31f80c1e45655260254c89632bff89c3d1266e5768a28f5bf4e6df656f61d7?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    title: "Quality assurance",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e478d2bb34eb5257bbd000cd12e599553c3d77324e78ce38181a3dfffde9afb7?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    title: "Delivery from 1 hour",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
];

const FeatureList = () => (
  <section className="flex flex-wrap gap-9 mr-4 ml-2.5 tracking-tight max-md:mr-2.5 max-md:max-w-full">
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
