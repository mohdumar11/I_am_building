import AboutSection from '@/components/Services'
import FooterIcons from '@/components/Footer'
import HeaderContent from '@/components/HeaderContent'
import Navbar from '@/components/Navbar'
import Offer from '@/components/Offer'
import Resource from '@/components/Resource'
import TeamSection from '@/components/Teams'
import React, { useEffect, useState } from 'react'

function Team() {
    const [show, setShow] = useState(false);
    console.log(show)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
        <Navbar/>
        <HeaderContent/>
        <Offer/>
        <AboutSection/>

        <TeamSection/>
        <Resource/>
        <FooterIcons/>

       {show && <button
        onClick={scrollToTop}
      className="text-xl font-sans fixed bottom-6 right-6 z-50 px-3 h-10 bg-teal-600 text-white rounded-full shadow-lg transition"
      aria-label="Scroll to top"
    >
      &uarr;
    </button>}
    </div>
  )
}

export default Team