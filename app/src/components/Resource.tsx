export default function Resource() {
  return (
    <section id="contact" className="relative min-h-screen bg-yellow-300 flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <img
        src="/image/bg-callout.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 px-4 max-w-3xl">
        <p className="text-lg font-bold text-gray-800 mb-2">
         We empower professionals and businesses to grow with standout portfolios and smart AI powered solutions. 
        </p>
        <button className="bg-teal-700 text-white px-6 py-3 font-semibold rounded shadow hover:bg-teal-800 transition">
          Watch Here.


        </button>
      </div>
    </section>
  );
}
