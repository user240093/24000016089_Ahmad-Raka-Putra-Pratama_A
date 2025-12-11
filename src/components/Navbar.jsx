// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 left-0 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          Ruang Ekspresi
        </div>
        
        {/* Menu Desktop (Hidden di HP, Muncul di layar MD/Laptop) */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-primary cursor-pointer transition">Beranda</li>
          <li className="hover:text-primary cursor-pointer transition">Program</li>
          <li className="hover:text-primary cursor-pointer transition">Galeri</li>
          <li className="hover:text-primary cursor-pointer transition">Kontak</li>
        </ul>

        {/* Tombol Login (Opsional sesuai style umum) */}
        <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
          Masuk
        </button>

        {/* Menu Icon Mobile (Hamburger) */}
        <button className="md:hidden text-gray-600 text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;