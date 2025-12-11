import React, { useState } from 'react';
import { 
  Lightbulb, PenTool, Users, GraduationCap, 
  Clock, Gamepad2, BookOpen, Code, UserCheck, 
  ArrowRight, ArrowLeft, MapPin, Phone, Mail 
} from 'lucide-react';

// --- DATA: SLIDESHOW PROJECT ---
const projectSlides = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "Creative Portfolio Platform",
    description: "Platform showcase karya mahasiswa dengan fitur feedback komunitas dan sistem rating real-time.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    team: [10, 12, 33],
    bgColor: "bg-blue-50/50",
    badgeColor: "blue"
  },
  {
    id: 2,
    category: "Web Development",
    title: "E-Learning Management System",
    description: "Sistem manajemen pembelajaran terpadu dengan fitur kelas virtual dan tracking progress otomatis.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    team: [45, 22, 18],
    bgColor: "bg-green-50/50",
    badgeColor: "green"
  },
  {
    id: 3,
    category: "Mobile Development",
    title: "Campus Event Explorer App",
    description: "Aplikasi mobile berbasis Flutter untuk menemukan dan mendaftar event kampus secara real-time.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    team: [60, 55, 41],
    bgColor: "bg-pink-50/50",
    badgeColor: "pink"
  }
];

// --- 1. KOMPONEN KECIL (REUSABLE COMPONENTS) ---

const Badge = ({ text, color }) => {
  const styles = {
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    green: "bg-green-100 text-green-800 border-green-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    pink: "bg-pink-100 text-pink-800 border-pink-200",
  };
  return (
    <span className={`px-4 py-1 rounded-full text-xs font-bold border ${styles[color] || styles.blue}`}>
      {text}
    </span>
  );
};

const SectionTitle = ({ title, highlight, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      {title} <span className="text-blue-600">{highlight}</span>
    </h2>
    {subtitle && <p className="text-gray-500 text-sm max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// --- 2. KOMPONEN PER BAGIAN (SECTIONS) ---

const Navbar = () => (
  <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-blue-900 text-xl">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">RE</div>
        Ruang Ekspresi
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#home" className="text-blue-600 font-bold">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#program" className="hover:text-blue-600 transition">Program</a>
        <a href="#showcase" className="hover:text-blue-600 transition">Project</a>
        <a href="#mentor" className="hover:text-blue-600 transition">Testimonials</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section id="home" className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        <span className="text-blue-600">RUANG EKSPRESI :</span> Wadah Kreatif & Kompetitif Mahasiswa
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
        <Badge text="Ideation" color="yellow" />
        <Badge text="Creative" color="green" />
        <Badge text="Collaboration" color="blue" />
        <Badge text="Guidance & Support" color="pink" />
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Tempat mahasiswa mengembangkan potensi melalui pendekatan holistik, kolaboratif, dan bimbingan profesional untuk mencetak talenta digital masa depan.
      </p>
    </div>
    <div className="flex-1 w-full">
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
        alt="Meeting Mahasiswa" 
        className="w-full h-80 object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-xl"
      />
    </div>
  </section>
);

const FeaturesSection = () => {
  const pillars = [
    { title: "Ideation", icon: <Lightbulb size={24}/>, desc: "Mengembangkan ide liar kreatif.", color: "yellow" },
    { title: "Creative", icon: <PenTool size={24}/>, desc: "Menjadikan ide karya nyata.", color: "green" },
    { title: "Collaboration", icon: <Users size={24}/>, desc: "Kerjasama tim multidisiplin.", color: "blue" },
    { title: "Guidance", icon: <GraduationCap size={24}/>, desc: "Bimbingan mentor ahli.", color: "pink" },
  ];

  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Empat Pilar" 
          highlight="Ruang Ekspresi" 
          subtitle="Komponen utama yang dirancang untuk mengembangkan potensi mahasiswa secara menyeluruh."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className={`p-6 rounded-xl border flex flex-col items-center text-center hover:shadow-lg transition bg-${item.color}-50 border-${item.color}-200`}>
              <div className={`p-3 rounded-full mb-4 bg-${item.color}-200 text-${item.color}-800`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScheduleSection = () => (
  <section id="program" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle 
        title="Jadwal &" 
        highlight="Program Kegiatan"
        subtitle="Program terstruktur setiap Sabtu untuk optimalisasi skill."
      />
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
        <div className="flex items-center justify-center mb-8 text-blue-600 font-bold text-lg gap-2">
          <Clock size={20} /> <span>Setiap Sabtu</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
             <div className="mt-1 bg-yellow-200 p-2 rounded-lg text-yellow-800 h-fit"><Clock size={20}/></div>
             <div>
                <h4 className="font-bold text-gray-900">Sesi Pagi (09.00 - 12.00)</h4>
                <p className="text-sm text-gray-600 mt-1">Workshop Teknis, Coding, dan Problem Solving.</p>
             </div>
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
             <div className="mt-1 bg-green-200 p-2 rounded-lg text-green-800 h-fit"><Clock size={20}/></div>
             <div>
                <h4 className="font-bold text-gray-900">Sesi Sore (13.00 - 15.00)</h4>
                <p className="text-sm text-gray-600 mt-1">Project Work, Mentoring, dan Evaluasi Progress.</p>
             </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { t: "Game Talks", d: "Sesi sharing alumni.", c: "yellow", i: <Gamepad2/> },
          { t: "Kelas Khusus", d: "Skill development.", c: "green", i: <BookOpen/> },
          { t: "Project Work", d: "Real case study.", c: "blue", i: <Code/> },
          { t: "Mentoring", d: "Konsultasi personal.", c: "pink", i: <UserCheck/> },
        ].map((item, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-t-4 shadow-sm border-${item.c}-300`}>
            <div className={`text-${item.c}-600 mb-3`}>{item.i}</div>
            <h4 className="font-bold mb-1">{item.t}</h4>
            <p className="text-xs text-gray-500">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ShowcaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = projectSlides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const slide = projectSlides[currentSlide];

  return (
    <section id="showcase" className={`py-16 ${slide.bgColor} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Showcase" 
          highlight="Student Projects"
          subtitle="Karya inovatif mahasiswa hasil program Ruang Ekspresi."
        />

        <div className="relative">
          {/* Tombol Navigasi */}
          <button onClick={prevSlide} className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md text-gray-600 hover:bg-blue-600 hover:text-white transition hidden md:flex">
            <ArrowLeft size={24}/>
          </button>
          
          <button onClick={nextSlide} className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md text-gray-600 hover:bg-blue-600 hover:text-white transition hidden md:flex">
            <ArrowRight size={24}/>
          </button>

          {/* Kartu Slider */}
          <div key={slide.id} className="bg-white rounded-[2rem] p-8 shadow-xl flex flex-col-reverse md:flex-row items-center gap-10 animate-fade-in">
            <div className="flex-1 space-y-5 px-2 md:px-4">
              <Badge text={slide.category} color={slide.badgeColor} />
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">{slide.title}</h3>
              <p className="text-gray-600 leading-relaxed">{slide.description}</p>
              
              <div className="pt-4">
                <p className="font-bold text-xs text-gray-400 mb-2 uppercase tracking-wide">Tim Pembuat:</p>
                <div className="flex -space-x-3">
                  {slide.team.map((imgId, index) => (
                    <img key={index} src={`https://i.pravatar.cc/100?img=${imgId}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" alt="Team"/>
                  ))}
                </div>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold mt-4 hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-200">
                Lihat Detail <ArrowRight size={18}/>
              </button>
            </div>

            <div className="flex-1 w-full">
               <div className="p-2 bg-white rounded-2xl shadow-sm border">
                 <img src={slide.image} className="rounded-xl w-full h-72 object-cover" alt={slide.title}/>
               </div>
            </div>
          </div>
        </div>

        {/* Indikator Titik */}
        <div className="flex justify-center gap-2 mt-8">
          {projectSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-blue-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => (
  <section id="mentor" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex gap-4 items-start p-6 border rounded-xl hover:shadow-md transition bg-white">
                <img src={`https://i.pravatar.cc/100?img=${i+5}`} className="w-12 h-12 rounded-full object-cover" alt="Mentor"/>
                <div>
                   <h5 className="font-bold text-gray-900">Budi Santoso</h5>
                   <p className="text-xs text-blue-600 font-semibold mb-2">Frontend Mentor</p>
                   <p className="text-xs text-gray-500 italic">"Lingkungan di sini sangat mendukung mahasiswa untuk berani salah dan belajar hal baru setiap harinya."</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1e3a8a] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div className="col-span-1">
        <div className="flex items-center gap-2 font-bold text-xl mb-4">
           <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-900 text-xs">RE</div>
           Ruang Ekspresi
        </div>
        <p className="text-blue-200 text-xs leading-relaxed">
          Platform pengembangan diri mahasiswa melalui kolaborasi, teknologi, dan kreativitas tanpa batas.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-4">Navigasi</h5>
        <ul className="space-y-2 text-xs text-blue-200">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Programs</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-4">Program</h5>
        <ul className="space-y-2 text-xs text-blue-200">
          <li>Game Talks</li>
          <li>Tech Workshop</li>
          <li>Design Sprint</li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-4">Hubungi Kami</h5>
        <ul className="space-y-3 text-xs text-blue-200">
          <li className="flex gap-2"><MapPin size={16}/> Yogyakarta, Indonesia</li>
          <li className="flex gap-2"><Mail size={16}/> hello@ruangekspresi.id</li>
          <li className="flex gap-2"><Phone size={16}/> +62 812 3456 7890</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-blue-800 pt-8 text-center">
      <p className="text-xs text-blue-300">© 2024 Ruang Ekspresi. All rights reserved.</p>
    </div>
  </footer>
);

// --- 3. MAIN APP COMPONENT ---

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScheduleSection />
        <ShowcaseSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;