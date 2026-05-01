import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ProjectDeepDive() {
  const details = [
    {
      icon: Target,
      title: "The Client & Goal",
      content: "Collaborating with forward-thinking brands to redefine their digital presence. The primary objective is always to create a balance between high-end aesthetics and seamless functionality, ensuring the end-user journey is both beautiful and intuitive."
    },
    {
      icon: Lightbulb,
      title: "Strategic Vision",
      content: "Every project starts with a deep dive into the brand's core values. We set ambitious goals to not just meet industry standards, but to set new ones through innovative design patterns and cutting-edge technology stacks."
    },
    {
      icon: ShieldAlert,
      title: "The Challenges",
      content: "Complex integrations and performance optimization often present significant hurdles. Balancing heavy interactive 3D elements with fast load times and mobile accessibility requires rigorous testing and creative problem-solving."
    },
    {
      icon: CheckCircle2,
      title: "The Solution",
      content: "By leveraging modern frameworks like React and specialized animation libraries like GSAP/Framer Motion, we develop robust solutions that maintain high performance without sacrificing visual fidelity or interactive depth."
    }
  ];

  return (
    <section id="insights" className="relative py-32 px-8 lg:px-32 bg-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/2 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Project Insights
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          >
            Crafting the narrative.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="bg-black p-12 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="liquid-glass-strong w-12 h-12 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading italic text-white mb-6">
                {item.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-12 liquid-glass rounded-3xl border border-white/10 text-center"
        >
          <p className="text-white/80 font-heading italic text-2xl md:text-3xl max-w-3xl mx-auto">
            "Transforming complex challenges into elegant digital solutions through dedicated craftsmanship and strategic thinking."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
