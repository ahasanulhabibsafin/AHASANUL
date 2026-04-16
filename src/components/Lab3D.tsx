import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '@google/model-viewer';

gsap.registerPlugin(ScrollTrigger);

export default function Lab3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<any>(null);

  useGSAP(() => {
    if (!modelRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
      }
    });

    tl.to(modelRef.current, {
      '--exposure': '2',
      '--environment-intensity': '2',
      '--camera-orbit': '180deg 75deg 2.5m',
      duration: 1
    });
  }, { scope: containerRef });

  return (
    <section id="3d-lab" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dpu456bh7/video/upload/v1776191602/qzzd9fv7atzt20xd2kzz.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </section>
  );
}
