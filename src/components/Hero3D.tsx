import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '@google/model-viewer';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      <div className="h-full w-full flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://res.cloudinary.com/dpu456bh7/video/upload/v1776193720/nlyto99nwgwboy7dh8vw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block liquid-glass rounded-full px-4 py-1 mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              SAFIN · Scrollytelling Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="italic text-white tracking-tight mb-8"
            style={{ fontFamily: 'Georgia', fontSize: '58px', lineHeight: '57.8px' }}
          >
            Building smart, modern, and visually powerful digital experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-white/60 font-body font-light text-base md:text-lg max-w-xl mx-auto mb-12"
          >
            Ahsanul Habib Safin — Web Developer & Graphic Designer based in Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="liquid-glass-strong rounded-full px-8 py-4 text-white flex items-center gap-2 group transition-transform hover:scale-105">
              Begin Journey
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <div className="flex items-center gap-2 text-white/40 text-xs font-body tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              📍 Dhaka, Bangladesh · 17 · Student (SSC 2026)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
