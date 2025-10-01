import { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Aim', href: '#offer' },
    { label: 'Services', href: '#services' },
    { label: 'The Team', href: '#team' },
    { label: 'Resource', href: '#contact' },
  ];

  const favIcons = [
    {
      icon: <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />,
      href: 'https://www.linkedin.com/in/mohd-umar-7b16a6196/',
    },
    {
      icon: <FaFacebook className="w-6 h-6 text-[#1877F2]" />,
      href: '#',
    },
    {
      icon: <FaInstagram className="w-6 h-6 text-[#C13584]" />,
      href: '#',
    },
    {
      icon: <FaGithub className="w-6 h-6 text-black" />,
      href: 'https://github.com/mohdumar11',
    },
    {
      icon:'Sign in',
      href:'#'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section:any = sections[i];
        if (section && section.offsetTop <= scrollY + 80) {
          setActiveLink(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-[10px] flex justify-between items-center h-[80px]">
        <a href="#home" className="text-teal-600 text-2xl font-bold">Hey I am building</a>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item,index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`text-xl font-medium hover:text-teal-600 transition-colors duration-200 ${
                activeLink === item.href ? 'text-teal-600 underline underline-offset-4' : 'text-gray-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 items-center ml-6">
          {favIcons.map(item => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.href);
                  setIsOpen(false);
                }}
                className={`block py-2 font-medium hover:bg-gray-50 transition ${
                  activeLink === item.href ? 'text-teal-600 font-semibold underline underline-offset-4' : 'text-gray-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-4  mt-4">
            {favIcons.map(item => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
