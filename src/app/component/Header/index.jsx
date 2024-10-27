'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Perhitungan scroll progress dilakukan di dalam client-side useEffect
      if (typeof window !== 'undefined' && document.body) {
        const totalScrollableDistance = document.body.scrollHeight - window.innerHeight;
        const progress = (currentScrollY / totalScrollableDistance) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-20">
      {/* Scroll Indicator */}
      <div className="h-1 bg-teal-500" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center transition-all duration-300">
        <div className="text-2xl font-bold text-green-600">Rumah Sakit</div>
        <div className="space-x-6">
          <a href="/" className="hover:text-teal-400">Home</a>
          <a href="/services" className="hover:text-teal-400">Services</a>
          <a href="/about" className="hover:text-teal-400">About Us</a>
          <a href="/contact" className="hover:text-teal-400">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;