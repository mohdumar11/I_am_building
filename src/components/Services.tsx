// import { Building, Link, Gamepad2, Mustache } from "lucide-react";

const features = [
  {
    icon: <img src={'/image/netlify-svgrepo-com.svg'} className="w-8 h-8 text-[#1f7b94]" />,
    title: "Software Solution",
    description:
      "Custom software to streamline your business and accelerate growth through smart, scalable tech.",
  },
  {
    icon: <img src={'/image/stack-apps.svg'} className="w-8 h-8 text-[#1f7b94]" />,
    title: "Portfolio Building",
    description:
      "Design and develop professional portfolios that showcase your skills, experience, and potential.",
  },
  {
    icon: <img src={'/image/education.svg'} className="w-8 h-8 text-[#1f7b94]" />,
    title: "Mentorship",
    description:
      "One-on-one mentorship to guide your career, upskill effectively, and achieve your personal goals.",
  },
  {
    icon: <img src={'/image/resume_img.svg'} className="w-8 h-8 text-[#1f7b94]" />,
    title: "Resume Building",
    description: "Craft impactful, ATS-friendly resumes that stand out to recruiters and land more interviews.",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section id="services" className="bg-[#1f7b94] text-white py-20">
      <div className="text-center mb-12 px-4">
        <h4 className="text-yellow-400 font-bold uppercase mb-2">Services</h4>
        <h2 className="text-4xl font-extrabold">What We Offer</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
