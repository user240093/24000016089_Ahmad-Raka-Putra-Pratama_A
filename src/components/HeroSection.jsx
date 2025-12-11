// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          {/* Badge Kecil */}
          <span className="bg-pastel-blue/30 text-primary px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            #KreatifTanpaBatas
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            RUANG EKSPRESI: <br/>
            <span className="text-primary">Wadah Kreatif</span> & <br/>
            Kompetitif Mahasiswa
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            Platform digital terintegrasi untuk mahasiswa memamerkan karya, 
            mengikuti kompetisi, dan membangun portofolio profesional.
          </p>

          {/* Badges Pilar (Warna-warni sesuai config kita) */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-pastel-yellow text-yellow-800 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border border-yellow-200">
              💡 Seminar
            </span>
            <span className="bg-pastel-green text-green-800 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border border-green-200">
              🌱 Workshop
            </span>
            <span className="bg-pastel-blue text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border border-blue-200">
              🚀 Competition
            </span>
             <span className="bg-pastel-pink text-pink-800 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border border-pink-200">
              🤝 Networking
            </span>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Aksen Background Blob */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-pastel-blue rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-40 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* Gambar Utama */}
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Mahasiswa Diskusi" 
            className="relative z-10 rounded-tl-[60px] rounded-br-[60px] shadow-2xl w-4/5 object-cover h-auto border-4 border-white transform hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;