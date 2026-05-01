import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AUDIO_URL = "https://res.cloudinary.com/dpu456bh7/video/upload/v1777614548/mpikinouavii3fro6klu.mp3";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.8;
    
    const startAudio = () => {
      if (hasStartedRef.current) return;
      
      audio.play()
        .then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
          cleanup();
        })
        .catch(() => {
          // Autoplay blocked, keep listeners active
        });
    };

    const handleInteraction = () => {
      startAudio();
    };

    const cleanup = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    // Try immediately
    startAudio();

    // Setup fallback listeners
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return cleanup;
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[60] flex items-center gap-4">
      <audio 
        ref={audioRef} 
        src={AUDIO_URL} 
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="waiting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="text-[8px] font-bold uppercase tracking-tighter"
            >
              Wait
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-white/30 mb-1">
          {isPlaying ? "Voice Active" : "Waiting for interaction"}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: isPlaying ? [4, 12, 6, 14, 4][(i + i) % 5] : 2
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="w-0.5 bg-white/40 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
