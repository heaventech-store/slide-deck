import React from 'react';

export default function Navbar({ setCurrentSlide }) {
  // Ganti dengan nomor WhatsApp asli kamu (format 62)
  const nomorWA = "6285210402609"; 
  const pesanWA = encodeURIComponent("Halo Ahmad Zainur Rofikin, saya melihat portofolio digital Anda dan tertarik untuk berdiskusi lebih lanjut.");
  const linkWhatsApp = `https://wa.me/${nomorWA}?text=${pesanWA}`;

  // Ganti dengan link URL repository atau profil GitHub asli kamu
  const linkGitHub = "https://github.com/username_kamu/web-portofolio";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 md:px-12 py-6 flex justify-between items-center pointer-events-none">
      
      {/* BRAND LOGO - Nama asli kamu */}
      <div 
        onClick={() => setCurrentSlide(0)}
        className="text-lg md:text-xl font-bold tracking-tight text-white pointer-events-auto cursor-pointer select-none group"
      >
        Ahmad <span className="text-sky-500 group-hover:text-sky-400 transition-colors">Zainur Rofikin</span>
      </div>

      {/* ACTION BUTTONS (WA & GITHUB) */}
      <div className="flex items-center gap-3 pointer-events-auto">
        
        {/* Tombol GitHub (Style Elegan Dark sesuai tema website) */}
        <a 
          href="https://github.com/heaventech-store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 active:scale-95"
        >
          {/* Ikon GitHub SVG */}
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.62 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          GitHub
        </a>

        {/* Tombol WhatsApp */}
        <a 
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/20 px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-lg active:scale-95"
        >
          WhatsApp
        </a>

      </div>

    </nav>
  );
}