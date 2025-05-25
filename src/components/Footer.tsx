export default function FooterIcons() {
  return (
    <footer className="bg-white py-12 text-center">
      <div className="flex justify-center gap-6 mb-6">
        {/* Book Icon */}
        <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 20H5a2 2 0 01-2-2V5a2 2 0 012-2h7" />
            <path d="M19 20h-7V3h7a2 2 0 012 2v13a2 2 0 01-2 2z" />
          </svg>
        </div>

        {/* Twitter Icon */}
        <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>

        {/* GitHub Icon */}
        <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.005-.404 11.5 11.5 0 013.005.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.657.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.628-5.475 5.922.431.372.816 1.104.816 2.224 0 1.606-.014 2.903-.014 3.296 0 .322.192.698.8.58C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </div>

      <p className="text-gray-600">Project Hey-I-am-Building</p>
      <p className="text-gray-600">&copy; Mohd Umar 2025</p>
    </footer>
  );
}
