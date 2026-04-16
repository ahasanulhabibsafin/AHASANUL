import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutScrollReveal from './components/AboutScrollReveal';
import ImageSequenceScrub from './components/ImageSequenceScrub';
import SkillsParallax from './components/SkillsParallax';
import Lab3D from './components/Lab3D';
import ProjectRows from './components/ProjectRows';
import StatsParticles from './components/StatsParticles';
import ContactFooter from './components/ContactFooter';
import BottomVideo from './components/BottomVideo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero3D />
        <AboutScrollReveal />
        <ImageSequenceScrub />
        <SkillsParallax />
        <Lab3D />
        <ProjectRows />
        <StatsParticles />
        <ContactFooter />
        <BottomVideo />
      </main>
    </div>
  );
}
