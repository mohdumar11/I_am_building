import TypingText from "./animated"

export default function HeaderContent() {
  return (
    <section id="home" className="relative min-h-screen bg-yellow-300 flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <img
        src="/image/test2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Join us as we accelerate the development of AI applications */}

      {/* Overlay */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-white"><TypingText text="We are growing, Grow with Us." time={100}/></h1><br />
        <h2 className="text-2xl italic font-semibold text-white">
          <TypingText text="Join us as we accelerate the development of AI applications." time={50}/>
        </h2><br />
        <a href="#offer" className="text-white mt-4 px-6 py-3 border-2 border-blue-500 bg-[#155d74] text-white font-semibold rounded hover:bg-[#1d809f] transition">
          Read More
        </a>
      </div>
    </section>
  );
}
