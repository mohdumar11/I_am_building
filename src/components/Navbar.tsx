// components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Aim', href: '#offer' },
    { label: 'Services', href: '#services' },
    { label: 'The Team', href: '#team' },
    { label: 'Resource', href: '#contact' },
  ];

  return (
    <header className="bg-[#178d67] text-white  fixed w-full top-0 z-50 shadow-md">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <a href="#home" className="text-xl font-bold">Hey I am building</a>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-black-600 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Nav Links (Mobile) */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 font-medium hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
