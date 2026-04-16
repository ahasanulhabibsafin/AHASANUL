import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const chars = textRef.current?.querySelectorAll('.reveal-text');
    if (!chars) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
      }
    });

    tl.from(chars, {
      opacity: 0.1,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-in-a-dark-room-42732-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 lg:px-32">
        <div className="max-w-5xl">
          <div className="liquid-glass rounded-full px-4 py-1 mb-8 w-fit">
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Who I Am
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-12">
            Creativity meets functionality.
          </h2>

          <div ref={textRef} className="space-y-8" style={{ fontSize: '12px', lineHeight: '6px', fontFamily: 'Georgia' }}>
            <p className="reveal-text font-light leading-relaxed" style={{ fontSize: '13px', color: '#ffffff' }}>
              I'm Ahsanul Habib Safin, a passionate creator from Bangladesh. 
              Specializing in building modern web applications and impactful graphic designs.
            </p>
            <p className="reveal-text font-light text-white/90 leading-relaxed">
              With a focus on performance and aesthetics, I bridge the gap between 
              complex code and intuitive user experiences.
            </p>
            <p className="reveal-text font-light text-white/90 leading-relaxed">
              Currently a student (SSC 2026), I'm constantly pushing boundaries 
              and exploring the latest in digital craftsmanship.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 liquid-glass p-8 rounded-2xl max-w-md"
          >
            <p className="text-white/80 font-heading italic text-2xl mb-4">
              "Continuous learning. Impactful solutions. No compromises."
            </p>
            <div className="h-px w-12 bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
