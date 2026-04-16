import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-heading italic text-white tracking-tighter">SAFIN</span>
      </div>

      <div className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1">
        {['About', 'Work', '3D Lab', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="px-4 py-1.5 text-xs font-body font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            {item}
          </a>
        ))}
      </div>

      <Button className="bg-white text-black hover:bg-white/90 rounded-full px-4 py-1.5 text-xs h-auto flex items-center gap-1 group">
        Let's Talk
        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Button>
    </motion.nav>
  );
}
