import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  // DATA 12 SLIDE PREMIUM DENGAN VISUALISASI PENUH
  const originalSlides = [
    { id: 1, subtitle: "Strategic Branding", title: "AHMAD ZAINUR ROFIKIN", type: "title" },
    { id: 2, subtitle: "Profile & Vision", title: "Executive Summary", type: "profile" },
    { id: 3, subtitle: "Operational Impact", title: "99.9% System Uptime Target", type: "metric" },
    { id: 4, subtitle: "Technical Expertise 01", title: "Advanced Network Strategy", type: "networking" },
    { id: 5, subtitle: "Technical Expertise 02", title: "Systems & Server Administration", type: "servers" },
    { id: 6, subtitle: "Infrastructure Health", title: "Hardware Lifecycle Management", type: "hardware" },
    { id: 7, subtitle: "Case Study A", title: "Enterprise Network Redesign", type: "case-a" },
    { id: 8, subtitle: "Case Study B", title: "Hardware QC System Integration", type: "case-b" },
    { id: 9, subtitle: "Optimization Analytics", title: "Sistem Monitoring Terpusat", type: "chart" },
    { id: 10, subtitle: "Service Methodology", title: "Metodologi Tata Kelola IT Support", type: "compare" },
    { id: 11, subtitle: "Standard Operating Procedure", title: "SLA Service Level Agreement Flow", type: "process" },
    { id: 12, subtitle: "Open Opportunities", title: "Mari Bangun Jaringan", type: "contact" }
  ];

  const allSlides = [...originalSlides, originalSlides[0]];
  const totalSlides = originalSlides.length;

  // 1. AUTO PLAY TIME CONTROLLER (6 Detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // 2. TIMEOUT RESET JALUR DIAM-DIAM
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: currentSlide * width,
        behavior: isTransitioning ? 'smooth' : 'auto',
      });

      if (currentSlide === totalSlides) {
        const timeout = setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  return (
    <div className="bg-[#020617] h-screen w-screen overflow-hidden relative font-sans text-white selection:bg-sky-500 selection:text-slate-900">
      <Navbar />

      {/* CONTAINER SLIDE UTAMA */}
      <div ref={containerRef} className="flex h-full w-full overflow-hidden">
        {allSlides.map((slide, i) => (
          <div key={i} className="h-full w-screen flex-shrink-0 flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full">
              
              {/* SLIDE SUBTITLE / HEADER */}
              <span className="text-sky-400 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">
                {slide.subtitle} — Slide {i >= totalSlides ? 1 : i + 1}
              </span>

              {/* RENDER VIEW BERDASARKAN TYPE (KEMBALI KE DESAIN BAGUS SEBELUMNYA) */}
              
              {/* SLIDE 1: TITLE */}
              {slide.type === "title" && (
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-none">
                    AHMAD ZAINUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">ROFIKIN</span>
                  </h1>
                  <div className="h-1.5 w-24 bg-sky-500 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
                  <p className="text-lg md:text-2xl text-slate-400 tracking-widest uppercase font-light">Professional Portfolio Deck</p>
                </div>
              )}

              {/* SLIDE 2: PROFILE */}
              {slide.type === "profile" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Saya adalah seorang IT profesional yang berdedikasi tinggi dalam mengelola stabilitas infrastruktur jaringan dan optimasi sistem operasional perusahaan skala manufaktur.
                    </p>
                    <ul className="space-y-3 font-medium text-slate-400 text-base md:text-lg">
                      <li><span className="text-sky-400 mr-2">→</span> Spesialis Jaringan MikroTik & Manajemen VLAN</li>
                      <li><span className="text-sky-400 mr-2">→</span> Otomasi Sistem & Integrasi QC Device</li>
                      <li><span className="text-sky-400 mr-2">→</span> Pemeliharaan Preventif Lifecycle Aset IT</li>
                    </ul>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-sky-500/50 p-2 overflow-hidden bg-[#0f172a]">
                      <img src="./profil.jpg" alt="Ahmad Zainur Rofikin" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 3: METRIC */}
              {slide.type === "metric" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <div className="text-[100px] md:text-[150px] font-black text-sky-400 leading-none tracking-tight drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">99.9%</div>
                    <div className="text-xl font-bold tracking-widest uppercase text-slate-200 mt-2">System Uptime Target</div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Dampak Bisnis Strategis</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      Bagi saya, peran utama IT Support bukan sekadar memperbaiki unit yang rusak, melainkan memastikan seluruh roda sistem perusahaan berjalan lancar tanpa interupsi.
                    </p>
                    <div className="border-l-4 border-sky-400 bg-sky-500/5 p-4 rounded-r-xl">
                      <p className="text-slate-300 italic text-base">"Menghilangkan potensi downtime pada alur kerja produksi kritis setara dengan mengamankan efisiensi biaya operasional perusahaan."</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 4: NETWORKING */}
              {slide.type === "networking" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">🌐</div><h3 className="text-xl font-bold mb-2">MikroTik Architecture</h3><p className="text-slate-400 text-sm">Konfigurasi routing tingkat lanjut, manajemen bandwidth, manajemen firewall rules, dan load balancing.</p></div>
                    <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">🛡️</div><h3 className="text-xl font-bold mb-2">VLAN Segmentation</h3><p className="text-slate-400 text-sm">Pemisahan jalur lalu lintas data antar departemen (Office vs Pabrik) untuk mengoptimalkan keamanan internal.</p></div>
                    <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">📡</div><h3 className="text-xl font-bold mb-2">Wireless Coverage</h3><p className="text-slate-400 text-sm">Manajemen penempatan Access Point skala luas untuk meminimalisir daerah blank-spot sinyal di area pabrik.</p></div>
                  </div>
                </div>
              )}

              {/* SLIDE 5: SERVERS */}
              {slide.type === "servers" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#1e293b]/30 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">💻</div><h3 className="text-xl font-bold mb-2">OS Environment</h3><p className="text-slate-400 text-sm">Administrasi lingkungan Windows Server, Active Directory, serta distribusi manajemen kebijakan sistem operasi klien.</p></div>
                    <div className="bg-[#1e293b]/30 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">📦</div><h3 className="text-xl font-bold mb-2">Virtualization</h3><p className="text-slate-400 text-sm">Implementasi arsitektur mesin virtual berbasis VMware untuk efisiensi utilitas resource hardware server fisik.</p></div>
                    <div className="bg-[#1e293b]/30 p-8 rounded-2xl border border-slate-800"><div className="text-3xl mb-4">💾</div><h3 className="text-xl font-bold mb-2">Backup Strategy</h3><p className="text-slate-400 text-sm">Penyusunan skema backup berkala otomatis untuk mitigasi ancaman kehilangan data kritis (Disaster Recovery).</p></div>
                  </div>
                </div>
              )}

              {/* SLIDE 6: HARDWARE */}
              {slide.type === "hardware" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">Manajemen pemeliharaan perangkat keras berskala korporat dengan melakukan audit mendalam, perbaikan komponen kritis, dan efisiensi performa spesifikasi komputer.</p>
                    <div className="space-y-4">
                      <div className="bg-[#1e293b]/40 p-4 rounded-xl border border-slate-800 flex gap-4">
                        <div className="text-sky-400 font-bold">✓</div>
                        <div><h4 className="font-bold text-white text-sm">Root-Cause Analysis</h4><p className="text-xs text-slate-500">Mendeteksi akar masalah kerusakan komponen hardware secara akurat.</p></div>
                      </div>
                      <div className="bg-[#1e293b]/40 p-4 rounded-xl border border-slate-800 flex gap-4">
                        <div className="text-sky-400 font-bold">✓</div>
                        <div><h4 className="font-bold text-white text-sm">Legacy Asset Optimization</h4><p className="text-xs text-slate-500">Meningkatkan masa pakai hardware lawas melalui manajemen upgrade komponen yang presisi.</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-lg font-bold mb-4 text-sky-400">Device Integration Matrix</h3>
                    <div className="space-y-3">
                      <div><div className="flex justify-between text-xs mb-1 font-mono"><span>PC Maintenance & Repair</span><span>95%</span></div><div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-sky-500" style={{width: '95%'}}></div></div></div>
                      <div><div className="flex justify-between text-xs mb-1 font-mono"><span>QC Device Calibration Integration</span><span>85%</span></div><div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-sky-400" style={{width: '85%'}}></div></div></div>
                      <div><div className="flex justify-between text-xs mb-1 font-mono"><span>Server Hardware Diagnostics</span><span>90%</span></div><div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: '90%'}}></div></div></div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 7: CASE STUDY A */}
              {slide.type === "case-a" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">Melakukan perombakan topologi jaringan lama pada area perkantoran dan produksi yang sebelumnya rentan mengalami tabrakan IP dan pembagian bandwith tidak merata.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-800"><div className="text-xl font-bold text-sky-400">MikroTik</div><div className="text-xs text-slate-500 mt-1">Core Router Migration</div></div>
                      <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-800"><div className="text-xl font-bold text-emerald-400">-40%</div><div className="text-xs text-slate-500 mt-1">Insiden Network Down</div></div>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-800 h-72 bg-slate-900 shadow-2xl">
                    <img src="./network_case.png" alt="Network Case Study" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}

              {/* SLIDE 8: CASE STUDY B */}
              {slide.type === "case-b" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 h-72 bg-slate-900 shadow-2xl order-2 md:order-1">
                    <img src="./qc_integration.png" alt="QC Case Study" className="w-full h-full object-cover" />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">Membantu integrasi perangkat penilai akurasi warna (Colorimeter Linshang LS170) dengan sistem komputasi laporan QC pabrik furnitur secara otomatis, meningkatkan kecepatan entri data.</p>
                    <div className="border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-xl">
                      <div className="text-lg font-bold text-emerald-400">+40% Efisiensi Waktu</div>
                      <div className="text-sm text-slate-400 mt-1">Memangkas waktu tunggu pembuatan laporan analisis warna material.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 9: CHART */}
              {slide.type === "chart" && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7">
                    <div className="bg-[#1e293b]/60 p-6 rounded-2xl border border-slate-800 shadow-xl">
                      <div className="flex justify-between items-center mb-6"><span className="text-xs font-bold font-mono text-slate-400 uppercase">Trend Insiden Masalah IT (2025)</span><span className="text-xs bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded">Real Data</span></div>
                      <svg className="w-full h-56" viewBox="0 0 1000 350">
                        <defs><linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: '#38bdf8', stopOpacity: 0.25}} /><stop offset="100%" style={{stopColor: '#38bdf8', stopOpacity: 0}} /></linearGradient></defs>
                        <line x1="0" y1="50" x2="1000" y2="50" stroke="#334155" strokeDasharray="5,5" />
                        <line x1="0" y1="150" x2="1000" y2="150" stroke="#334155" strokeDasharray="5,5" />
                        <line x1="0" y1="250" x2="1000" y2="250" stroke="#334155" strokeDasharray="5,5" />
                        <path d="M0,300 L200,260 L400,180 L600,110 L800,50 L1000,45 L1000,320 L0,320 Z" fill="url(#chartGrad)" />
                        <polyline points="0,300 200,260 400,180 600,110 800,50 1000,45" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                        <circle cx="200" cy="260" r="7" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" /><circle cx="400" cy="180" r="7" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" /><circle cx="600" cy="110" r="7" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" /><circle cx="800" cy="50" r="7" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">Grafik di samping menampilkan efektivitas nyata penurunan tingkat laporan masalah teknis dari para karyawan setelah dilakukannya standarisasi infrastruktur jaringan dan monitoring proaktif.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: COMPARE TABLE */}
              {slide.type === "compare" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#1e293b]/10">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1e293b]/70 border-b border-slate-700">
                          <th className="p-4 font-bold text-sky-400">Kategori Layanan</th>
                          <th className="p-4 font-bold text-slate-400">Pola Kerja Tradisional</th>
                          <th className="p-4 font-bold text-sky-400">Pola Kerja Strategis Saya</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-slate-800 text-slate-300">
                        <tr><td className="p-4 font-bold text-white">Penanganan Masalah</td><td className="p-4 text-slate-500">Menunggu keluhan masuk baru bertindak.</td><td className="p-4 bg-sky-500/5">Mencegah kerusakan dengan monitoring sistem real-time.</td></tr>
                        <tr><td className="p-4 font-bold text-white">Manajemen Bandwidth</td><td className="p-4 text-slate-500">Dibiarkan polos tanpa pembatasan teratur.</td><td className="p-4 bg-sky-500/5">Segmentasi VLAN teratur sesuai fungsi divisi.</td></tr>
                        <tr><td className="p-4 font-bold text-white">Aset Perangkat Keras</td><td className="p-4 text-slate-500">Dibiarkan berdebu hingga terjadi kerusakan total.</td><td className="p-4 bg-sky-500/5">Audit berkala secara proaktif dan manajemen lifecycle aset.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 11: PROCESS */}
              {slide.type === "process" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-16 border-l-4 border-sky-500 pl-4">{slide.title}</h2>
                  <div className="relative flex flex-col md:flex-row justify-between gap-6">
                    <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-800 hidden md:block"></div>
                    {["01 // Monitoring", "02 // Diagnosis", "03 // Resolution", "04 // Audit"].map((step, idx) => (
                      <div key={idx} className="bg-[#1e293b]/60 p-6 rounded-xl border border-slate-800 text-center w-full md:w-1/4 z-10">
                        <div className="w-12 h-12 bg-slate-900 border-2 border-sky-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sky-400">{idx+1}</div>
                        <h4 className="font-bold text-white text-sm mb-1">{step.split(" // ")[1]}</h4>
                        <p className="text-xs text-slate-500">Prosedur penanganan terukur sesuai SOP.</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 12: CONTACT */}
              {slide.type === "contact" && (
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Siap Membangun Infrastruktur Tangguh?</h2>
                  <p className="text-slate-400 text-lg mb-10">Saya terbuka untuk peluang karir profesional penuh waktu tingkat lanjut atau konsultasi tata kelola infrastruktur jaringan berskala enterprise.</p>
                  <div className="flex justify-center gap-6 font-bold">
                    <a href="mailto:zainurrofikin99@gmail.com" className="bg-sky-500 hover:bg-sky-400 text-slate-900 px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.25)]">Kirim Email</a>
                    <a href="https://www.linkedin.com/in/zainur-rofikin-719a6036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-xl">LinkedIn</a>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NAVIGATION INDIKATOR TITIK (Posisi Tengah Simetris) */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center gap-4 z-50 pointer-events-none">
        
        {/* Baris Titik Navigasi (Tombol bisa diklik) */}
        <div className="flex gap-2.5 pointer-events-auto">
          {originalSlides.map((_, idx) => {
            const isActive = currentSlide === idx || (currentSlide === totalSlides && idx === 0);
            return (
              <button
                key={idx}
                onClick={() => { setIsTransitioning(true); setCurrentSlide(idx); }}
                className={`h-2 transition-all duration-500 rounded-full ${
                  isActive ? 'w-16 bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 'w-3 bg-slate-800 hover:bg-slate-700'
                }`}
                title={`Ke Slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Teks Copyright Tepat di Tengah Bawah */}
        <div className="text-slate-600 font-mono text-[11px] uppercase tracking-[0.25em] select-none text-center">
          © 2026 HeavenTech // ALL RIGHTS RESERVED
        </div>

      </div>
    </div>
  );
}