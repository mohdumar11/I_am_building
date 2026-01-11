import Image from "next/image";

const teamMembers = [
  {
    name: "Mohd Umar (Mercedes-Benz)",
    description: "Seldom have men seen him, seldom they shall.",
    image: "/image/portfolio-2.jpg",
    bgImage: "/image/umar_img-2.jpg",
    link: "https://www.linkedin.com/in/mohd-umar-7b16a6196/",
  },
  {
    name: "Anubhav Singh Guleria (Flipkart)",
    description: "The Quirky outspoken know-it-all.",
    image: "/image/portfolio-1.jpg",
    bgImage: "/image/anubhav.jpg",

    link: "https://www.linkedin.com/in/anubhavsguleria/",
  },
  {
    name: "Nitin Ranjan (Fiserv)",
    description: "Life is music, ink, nature and food.",
    image: "/image/portfolio-1.jpg",
    bgImage: "/image/nitin.jpg",

    link: "https://www.linkedin.com/in/nitin-ranjan-here/",
  },
  {
    name: "Anish Aggarwal (ISS)",
    description: "Code, Coffee and Adventure.",
    image: "/image/portfolio-2.jpg",
    bgImage: "/image/anish.jpg",

    link: "https://www.linkedin.com/in/anishaggarwal24/",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-secondary text-xl font-medium mb-2">
            Connect On LinkedIn
          </h3>
          <h2 className="text-4xl font-bold text-gray-900">The Project Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <a
              key={idx}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden shadow-lg transform transition duration-300 hover:scale-90"
            >
              <div className="w-full h-64 sm:h-80 relative">
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src={member.bgImage ?? member.image}
                    alt={`${member.name} hover`}
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-start flex-col justify-center  px-4 bg-black bg-opacity-50 group-hover:bg-[#155d74] group-hover:bg-opacity-70 transition-colors duration-300">
                <h3 className="font-sans ml-4 mt-20 sm:ml-[5rem] sm:mt-[8rem] text-white text-2xl font-semibold">
                  {member.name}
                </h3>
                <p className="font-sans ml-4 sm:ml-[5rem] text-white text-sm mt-2">
                  {member.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
